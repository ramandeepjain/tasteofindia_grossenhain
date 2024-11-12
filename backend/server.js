require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure the email transporter
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Define the route to send emails
app.post('/send-email', async (req, res) => {
    const {
        firstName, lastName, email, phone,
        date, time, nPeople, occasion, specialRequest
    } = req.body;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `Neue Reservierung`,
            text: `
            Vorname: ${firstName}\n
            Nachname: ${lastName}\n
            Email: ${email}\n
            Phone: ${phone}\n
            Datum: ${date}\n
            Anzahl Personen: ${nPeople}\n
            Anlass: ${occasion}\n
            Uhrzeit: ${time}\n
            Bemerkungen: ${specialRequest}
            `
        });
        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Failed to send email');
    }
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
