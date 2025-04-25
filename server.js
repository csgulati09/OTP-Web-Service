const express = require('express');
const cors = require('cors');
const app = express();
const port = 8055;

// Store received OTPs
let receivedOTPs = [];

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Endpoint to receive OTP
app.get('/sendOTP', (req, res) => {
    const otpData = req.query;
    console.log('Received OTP:', otpData);
    receivedOTPs.push({
        data: otpData,
        timestamp: new Date().toISOString()
    });
    res.json({ success: true });
});

// Endpoint to get all received OTPs
app.get('/getOTPs', (req, res) => {
    res.json(receivedOTPs);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
}); 