const express = require("express");
const { RestClient } = require("@fugle/marketdata");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  // this is the fugle client to get stock data
  const client = new RestClient({
    apiKey:
      "ZjdmYzdmOWItYjNhYy00OWU0LWE3OWEtNGQyYjg0MzFhZmU2IGI5ZWJkOWI1LTA2ZTUtNGE4NS1hYzU1LTQ1MjU1ZmFlODg4Yw==",
  });
  const stock = client.stock;

  let stockId = req.query.stockId;

  const stockData = await stock.intraday.quote({ symbol: stockId });
  res.json(stockData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
