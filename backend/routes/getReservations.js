const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const dayjs = require('dayjs');

// PostgreSQL Connection Pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
});


router.get('/api/reservations', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT 
          r.reservation_date,
          r.reservation_time,
          c.first_name,
          c.last_name,
          r.party_size,
          r.special_requests
        FROM reservations r
        JOIN customers c ON r.customer_id = c.customer_id
        ORDER BY r.reservation_date DESC, r.reservation_time DESC;
      `);
  
      res.json(result.rows);
    } catch (error) {
      console.error('Error fetching reservations:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
