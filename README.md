# Receipt Processor

This project implements a backend web service for the Fetch Rewards Receipt Processor Challenge.

The service exposes two endpoints:
- `POST /receipts/process`: Accepts a receipt JSON and returns a unique ID.
- `GET /receipts/{id}/points`: Returns the points awarded to that receipt.

---

## How to Run the App Locally

1. Install dependencies:

```bash
npm install
```

2. Start the server:

```bash
node app.js
```

You should see:
```
Server running on http://localhost:3000
```

---

## How to Test the App

### Step 1: Make sure the example receipt exists at `examples/morning-receipt.json`

```json
{
  "retailer": "Walgreens",
  "purchaseDate": "2022-01-02",
  "purchaseTime": "08:13",
  "total": "2.65",
  "items": [
    { "shortDescription": "Pepsi - 12-oz", "price": "1.25" },
    { "shortDescription": "Dasani", "price": "1.40" }
  ]
}
```

### Step 2: Submit the receipt

In a separate terminal window (while the server is still running), execute:

```bash
curl -X POST http://localhost:3000/receipts/process \
  -H "Content-Type: application/json" \
  -d @examples/morning-receipt.json
```

Expected output:
```json
{ "id": "some-uuid" }
```

### Step 3: Get the points using the returned ID

```bash
curl http://localhost:3000/receipts/some-uuid/points
```

Expected output:
```json
{ "points": 15 }
```

---

## Notes

- Implements all rules defined in the challenge spec.
- Ready to be cloned and tested with no additional setup.
