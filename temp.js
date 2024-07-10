app.http("httpPriceGetter", {
  methods: ["GET", "POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    //context.log(`Http function processed request for url "${request.url}"`);

    let stockId =
      request.query.get("stockId") || (await request.text()) || "world";
    stockId = JSON.parse(stockId).stockId;
    //console.log(`Stock ID: ${stockId}`);

    const client = new RestClient({
      apiKey:
        "ZjdmYzdmOWItYjNhYy00OWU0LWE3OWEtNGQyYjg0MzFhZmU2IGI5ZWJkOWI1LTA2ZTUtNGE4NS1hYzU1LTQ1MjU1ZmFlODg4Yw==",
    });
    const stock = client.stock;

    const stockInfo = await stock.intraday.quote({ symbol: stockId }); //.then((data) => console.log(data));
    //console.log(stockInfo);
    //console.log(typeof stockInfo);

    return { body: JSON.stringify(stockInfo) };
  },
});
