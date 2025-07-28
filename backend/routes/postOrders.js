const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// PostgreSQL Connection Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});

router.post('/api/orders', async (req, res) => {
  const { cartItems, firstName, lastName, phone, email, total_amount } = req.body;

  if (!cartItems?.length || !firstName || !lastName || !email || !total_amount) {
    return res.status(400).json({ error: 'Missing required data' });
  }

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // Combine first and last name
    const customerName = `${firstName} ${lastName}`;
    
    // Try to find existing customer by name, phone, and email
    let customerRes = await client.query(
      `SELECT id FROM shop_customers WHERE name = $1 AND phone = $2 AND email = $3`,
      [customerName, phone, email]
    );

    let customerId;

    if (customerRes.rows.length > 0) {
        // Customer already exists
        customerId = customerRes.rows[0].id;
    } else {
        // Insert new customer
        const insertRes = await client.query(
            'INSERT INTO shop_customers (name, phone, email) VALUES ($1, $2, $3) RETURNING id',
            [customerName, phone, email]
        );
        customerId = insertRes.rows[0].id;
    }

    // Create order
    const orderRes = await client.query(
      'INSERT INTO orders (shop_customer_id, total_amount) VALUES ($1, $2) RETURNING id',
      [customerId, total_amount]
    );
    const orderId = orderRes.rows[0].id;

    // Insert order items
    for (const cartItem of cartItems) {
        const { item_name, quantity, price } = cartItem;

        // Try to find item by name
        let itemRes = await client.query(
            'SELECT id FROM items WHERE name = $1',
            [item_name]
        );

        let itemId;
        if (itemRes.rows.length > 0) {
            itemId = itemRes.rows[0].id;
        } else {
            // Insert item
            const insertRes = await client.query(
              'INSERT INTO items (name, price) VALUES ($1, $2) RETURNING id',
              [item_name, price]
            );
            itemId = insertRes.rows[0].id;
        }

        await client.query(
            `INSERT INTO order_items (order_id, item_id, quantity, price_at_purchase)
            VALUES ($1, $2, $3, $4)`,
            [orderId, itemId, quantity, price]
        );
    }

    await client.query('COMMIT');

    res.status(201).json({ message: 'Order placed successfully', orderId });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('Error placing order:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.release();
  }
});

module.exports = router;
