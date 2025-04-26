# OTP Collector

A simple web application to display OTPs (One-Time Passwords) received on your Phone.
**(iPhone Automation Required)**

## Features


- Real-time OTP collection and display

## API Endpoints

### 1. Send OTP
```
GET /sendOTP?otp=<otp_value>&source=<source_name>
```
Sends an OTP to the server. The OTP and source are passed as query parameters.

##
[📱 iPhone Automation Setup for OTP Collector](#📱-iphone-automation-setup-for-otp-collector)
##

### 2. Get OTPs
```
GET /getOTPs
```
Retrieves all received OTPs in reverse chronological order (newest first).

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

The frontend is served automatically at the root URL (`http://localhost:8055`)


##
## 📱 iPhone Automation Setup for OTP Collector

This project supports automatic forwarding of OTPs received via SMS on your iPhone to your server. Follow these steps to set up the automation using the Shortcuts app:

### 1. Open the Shortcuts App

- Launch the **Shortcuts** app on your iPhone.

### 2. Create a Personal Automation

1. Tap the **Automation** tab at the bottom.
2. Tap **Create Personal Automation** (or the "+" if you already have automations).
3. Select **Message**.
4. Choose **When I Receive a Message**.
5. Tap **Contains** and enter `OTP` (or any keyword you want to trigger the automation).
6. Tap **Next**.

### 3. Add Actions

Add the following actions in order:

#### a. Copy Message Content

- Action: **Copy Content to Clipboard**
- Input: **Content** (from the received message)

#### b. Set Variables

- Action: **Set Variable**
  - Name: `Sender`
  - Value: **Sender** (from the received message)

#### c. URL Encode the OTP

- Action: **URL Encode**
  - Input: **Shortcut Input** (the message content)

- Action: **Set Variable**
  - Name: `EncodedOTP`
  - Value: **URL Encoded Text**

#### d. Send OTP to Server

MIGHT BE HELPFUL: [Using NGROK for Public Access](#using-ngrok-for-public-access)

- Action: **Get Contents of URL**
  - URL:  
    ```
    https://<YOUR_SERVER_URL>/sendOTP?otp=<EncodedOTP>&source=<Sender>
    ```
    Replace `<YOUR_SERVER_URL>` with your actual server address (e.g., your ngrok URL or public server).


# Test Section

### 4. Save and Enable

- Tap **Next**.
- Disable **Ask Before Running** for full automation.
- Tap **Done**.

---

### Example Automation Flow

1. **Trigger:** When you receive a message containing "OTP".
2. **Actions:**
    - Copy the message content.
    - Store the sender.
    - URL encode the OTP.
    - Send the OTP and sender to your server endpoint.

---

### Notes

- Make sure your server is running and accessible from your iPhone (use ngrok or a public IP if needed).
- The automation will only trigger for messages containing your specified keyword (e.g., "OTP").
- You can customize the keyword or add more actions as needed.

---

## Using NGROK for Public Access

To make your local server accessible from your iPhone, you can use NGROK to expose your local server to the internet with a static domain:

### 1. Get a Static Domain
1. Visit the NGROK dashboard at https://dashboard.ngrok.com/domains
2. Create a static domain that you can use consistently

### 2. Start NGROK with Your Domain
Run the following command to expose your local server:

```bash
ngrok http --domain <NGROK DOMAIN> 8055
```

Replace `<NGROK DOMAIN>` with your static domain from the NGROK dashboard.

Use this domain in your iPhone Shortcuts automation when setting up the "Get Contents of URL" action.



