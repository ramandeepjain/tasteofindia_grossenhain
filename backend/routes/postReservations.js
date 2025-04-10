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

router.post('/api/reservations', async (req, res) => {
    try {
        const { 
            firstName, lastName, email, phone, 
            date, time, 
            nPeople, occasion, specialRequest 
        } = req.body;

        const startDateTime = dayjs(`${date} ${time}`);
        const startTime =  startDateTime.format('HH:mm:ss');
        // const endTime = startDateTime.add(3, 'hour').format('HH:mm:ss');


        // // 1. Get all reserved table_ids (flattened from array)
        // const reservedResult = await pool.query(`
        //     SELECT UNNEST(table_id) AS table_id FROM reservations
        //     WHERE date = $1
        //     AND (
        //         (reservation_time, reservation_time + interval '3 hour') OVERLAPS ($2::time, $3::time)
        //     )
        // `, [date, startTime, endTime]);
    
        // const reservedTableIds = reservedResult.rows.map(row => row.table_id);

        // // 2. Find available tables
        // const placeholders = reservedTableIds.map((_, i) => `$${i + 1}`).join(', ');
        // const tableQuery = `
        //     SELECT * FROM tables
        //     ${reservedTableIds.length > 0 ? `WHERE table_id NOT IN (${placeholders})` : ''}
        //     ORDER BY capacity ASC
        // `;        
        // const allTables = await pool.query(tableQuery, reservedTableIds);

        // // 3. Try to find a combination of tables that can handle nPeople
        // let selectedTables = [];
        // let totalCapacity = 0;

        // for (let table of allTables.rows) {
        //     selectedTables.push(table);
        //     totalCapacity += table.capacity;
        //     if (totalCapacity >= nPeople) break;
        // }

        // if (totalCapacity < nPeople) {
        //     return res.status(400).json({ message: 'No combination of tables available for this party size.' });
        // }

        // const selectedTableIds = selectedTables.map(t => t.table_id);

        // 4. Find or create customer
        let customer = await pool.query(
            'SELECT * FROM customers WHERE email = $1',
            [email]
        );
    
        let customerId;
        if (customer.rows.length === 0) {
            const newCustomer = await pool.query(`
            INSERT INTO customers (first_name, last_name, email, phone_number)
            VALUES ($1, $2, $3, $4)
            RETURNING customer_id
            `, [firstName, lastName, email, phone]);
            customerId = newCustomer.rows[0].customer_id;
        } else {
            customerId = customer.rows[0].customer_id;
        }

        // 5. Create reservation
        let reservation_id;
        const newReservation = await pool.query(`
            INSERT INTO reservations (
                customer_id, reservation_date, reservation_time, 
                party_size, special_requests
            )
            VALUES ($1, $2, $3, $4, $5)
            RETURNING reservation_id
        `, [
            customerId,
            // selectedTableIds,
            date,
            startTime,
            nPeople,
            specialRequest,
        ]);
        reservation_id = newReservation.rows[0].reservation_id;

        res.status(200).json({ message: 'Reservation successful', reservation_id});

    } catch (error) {
        console.error('Error during reservation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;