# OTP Collector

A simple web application to collect and display OTPs (One-Time Passwords) in real-time.

## Features

- Real-time OTP collection and display
- Clean, modern UI
- Automatic refresh of OTP list
- Health check endpoint
- CORS enabled for cross-origin requests

## API Endpoints

### 1. Send OTP
```
GET /sendOTP?otp=<otp_value>&source=<source_name>
```
Sends an OTP to the server. The OTP and source are passed as query parameters.

Example:
```
GET http://localhost:8055/sendOTP?otp=123456&source=email
```

### 2. Get OTPs
```
GET /getOTPs
```
Retrieves all received OTPs in reverse chronological order (newest first).

### 3. Health Check
```
GET /health
```
Returns the server's health status, including:
- Current status
- Server timestamp
- Uptime in seconds

## Setup and Installation

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

The server will start on `http://localhost:8055`

## Frontend

The frontend is served automatically at the root URL (`http://localhost:8055`). It features:
- Real-time display of received OTPs
- Automatic refresh every 5 seconds
- Clean, modern interface
- Display of OTP value, source, and timestamp

## Development

The application is built with:
- Node.js
- Express.js
- Vanilla JavaScript
- HTML/CSS

## License

MIT 