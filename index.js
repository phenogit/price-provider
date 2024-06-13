const { RestClient } = require("@fugle/marketdata");

const client = new RestClient({
  apiKey:
    "ZjdmYzdmOWItYjNhYy00OWU0LWE3OWEtNGQyYjg0MzFhZmU2IGI5ZWJkOWI1LTA2ZTUtNGE4NS1hYzU1LTQ1MjU1ZmFlODg4Yw==",
});
const stock = client.stock;

stock.intraday.quote({ symbol: "2330" }).then((data) => console.log(data));
