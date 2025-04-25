const express = require('express');
const cors = require('cors');
const app = express();
const port = 8055;

// Store received OTPs
let receivedOTPs = [];

// OTP expiration time in milliseconds (90 seconds)
const OTP_EXPIRATION_TIME = 90 * 1000;

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
    const now = Date.now();
    // Filter out OTPs older than 90 seconds
    const validOTPs = receivedOTPs.filter(otp => {
        const otpTime = new Date(otp.timestamp).getTime();
        return (now - otpTime) <= OTP_EXPIRATION_TIME;
    });
    
    // Update the stored OTPs to only include valid ones
    receivedOTPs = validOTPs;
    
    res.json(validOTPs);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`OTPs will expire after ${OTP_EXPIRATION_TIME/1000} seconds`);
}); 