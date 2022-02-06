const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios').default;
const port = 3000;

app.use(cors({ origin: '*' }));

app.get('/dolar', async (req, res) => {
  //res.json({venta: 110.68});
  const response = await axios.get('https://api-dolar-argentina.herokuapp.com/api/dolaroficial')
    .then(response => response)
    .catch(error => console.log(error));

  res.json(response.data.venta);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
