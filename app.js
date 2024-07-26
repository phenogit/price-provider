const express = require("express");
const { RestClient } = require("@fugle/marketdata");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const client = new RestClient({
    apiKey:
      "ZjdmYzdmOWItYjNhYy00OWU0LWE3OWEtNGQyYjg0MzFhZmU2IGI5ZWJkOWI1LTA2ZTUtNGE4NS1hYzU1LTQ1MjU1ZmFlODg4Yw==",
  });
  const stock = client.stock;

  //stock.intraday.quote({ symbol: "2330" }).then((data) => console.log(data));
  const stockData = await stock.intraday.quote({ symbol: "2330" });
  res.json(stockData);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
