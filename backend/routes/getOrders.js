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

// GET /api/orders/today - fetch all orders placed today
router.get('/api/orders/today', async (req, res) => {
  const client = await pool.connect();

  try {
    const result = await client.query(`
      SELECT 
        o.id AS order_id,
        o.total_amount,
        o.created_at,
        sc.name AS customer_name,
        sc.phone AS customer_phone,
        sc.email AS customer_email,
        json_agg(json_build_object(
          'item_name', i.name,
          'quantity', oi.quantity,
          'price_at_purchase', oi.price_at_purchase
        )) AS items
      FROM orders o
      JOIN shop_customers sc ON o.shop_customer_id = sc.id
      JOIN order_items oi ON o.id = oi.order_id
      JOIN items i ON oi.item_id = i.id
      WHERE o.created_at::date = CURRENT_DATE
      GROUP BY o.id, sc.name, sc.phone, sc.email, o.total_amount, o.created_at
      ORDER BY o.created_at DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching today\'s orders:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    client.release();
  }
});

module.exports = router;
