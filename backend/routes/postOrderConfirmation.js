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

// Define the route for order confirmation or cancellation
router.post('/api/order-confirmation', async (req, res) => {
    const { firstName, lastName, email, pickupTime } = req.body;

    if (!email || pickupTime === undefined || !firstName || !lastName) {
        return res.status(400).send('Missing required fields: firstName, lastName, email, pickupTime');
    }

    let subject, message;

    if (pickupTime === 100) {
        // Cancellation email
        subject = `Ihre Bestellung wurde storniert`;
        message = `
            Sehr geehrte*r ${lastName},

            leider müssen wir Ihnen mitteilen, dass Ihre Bestellung storniert wurde.

            Falls Sie Fragen haben, kontaktieren Sie uns bitte unter +49 (0)3522-5280790.

            Mit freundlichen Grüßen,
            Taste of India Großenhain Team
        `.trim();
    } else {
        // Regular confirmation email
        subject = `Ihre Bestellung ist in ${pickupTime} Min bereit`;
        message = `
            Sehr geehrte*r ${lastName},

            vielen Dank für Ihre Bestellung!

            Wir möchten Sie darüber informieren, dass Ihre Bestellung in ca. ${pickupTime} Minuten abholbereit sein wird.

            Falls Sie Fragen haben oder Änderungen vornehmen möchten, kontaktieren Sie uns bitte unter +49 (0)3522-5280790.

            Mit freundlichen Grüßen,
            Taste of India Großenhain Team
        `.trim();
    }

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: message
        });
        res.status(200).send('Order confirmation/cancellation email sent successfully');
    } catch (error) {
        console.error('Error sending order email:', error);
        res.status(500).send('Failed to send order email');
    }
});

module.exports = router;
