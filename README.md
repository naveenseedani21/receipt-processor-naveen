# Receipt Processor

This project implements a backend web service for the Fetch Rewards Receipt Processor Challenge.

The service exposes two endpoints:
- `POST /receipts/process`: Accepts a receipt JSON and returns a unique ID.
- `GET /receipts/{id}/points`: Returns the points awarded to that receipt based on business rules.

---

## 🧪 How to Run

### 🛠 Local Development

```bash
npm install
node app.js