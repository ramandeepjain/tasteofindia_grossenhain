const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

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
router.post('/api/send-email', async (req, res) => {
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
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: `Vielen Dank für Ihre Reservierungsanfrage!`,
            text: `Sehr geehrte*r ${lastName}, \n \nherzlichen Dank für Ihre Reservierungsanfrage! Wir freuen uns, Ihnen mitteilen zu können, dass Ihre Reservierung bestätigt ist. \n \nSollten wir doch noch Fragen haben, melden wir uns umgehend bei Ihnen. Andernfalls können Sie sicher sein, dass alles für Ihren Besuch vorbereitet ist. \n \nBei Fragen oder Änderungswünschen stehen wir Ihnen gerne zur Verfügung. \n \nWir freuen uns darauf, Sie am ${date} um ${time} Uhr bei uns begrüßen zu dürfen! \n \nMit freundlichen Grüßen,\nTaste of India Großenhain Team`.trim()
        });
        res.status(200).send('Email sent successfully to the customer');
    } catch (error) {
        // console.error('Error sending email:', error);
        res.status(500).send('Failed to send email to the customer');
    }
});

module.exports = router;
