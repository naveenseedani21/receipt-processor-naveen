const express = require('express');
const receiptsRouter = require('./routes/receipts');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/receipts', receiptsRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
