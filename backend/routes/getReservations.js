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
  const { date } = req.query;

  try {
    // If no date is provided, return 400 Bad Request
    if (!date) {
      return res.status(400).json({ error: 'Date parameter is required' });
    }

    const result = await pool.query(`
      SELECT 
        r.reservation_id,
        r.reservation_date,
        r.reservation_time,
        c.first_name,
        c.last_name,
        r.party_size,
        r.special_requests
      FROM reservations r
      JOIN customers c ON r.customer_id = c.customer_id
      WHERE r.reservation_date = $1
      ORDER BY r.reservation_time ASC;
    `, [date]); // Use parameterized query to prevent SQL injection

    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
