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

router.delete('/api/reservations/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query('DELETE FROM reservations WHERE reservation_id = $1', [id]);
    res.status(200).json({ message: 'Reservation deleted' });
  } catch (err) {
    console.error('Error deleting reservation:', err);
    res.status(500).json({ error: 'Failed to delete reservation' });
  }
});

module.exports = router;
