let form = document.getElementById('form');
let monto = document.getElementById('monto');
let cambio = document.getElementById('cambio');
let pais = document.getElementById('pais');
let ganancias = document.getElementById('ganancias');
let total = document.getElementById('total');

const dolarDia = async () => {
  const response = await axios.get(
    'https://api-dolar-argentina.herokuapp.com/api/dolaroficial'
  );

  // dataPromise = response.then((response) => response.data.venta);
  // console.log(dataPromise);
  return response.data.venta;
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let montoValue = Number(monto.value);
  // cambio = montoValue * 110.15;
  cambio = montoValue * dolarDia();

  let ncambio = Number(cambio).toFixed(2);
  document.getElementById('cambio').innerHTML = ncambio;

  pais = cambio * 0.3;
  let npais = Number(pais).toFixed(2);
  document.getElementById('pais').innerHTML = npais;

  ganancias = cambio * 0.35;
  let nganancias = Number(ganancias).toFixed(2);
  document.getElementById('ganancias').innerHTML = nganancias;

  total = cambio + pais + ganancias;
  totalFinal = parseFloat(total).toFixed(2);
  document.getElementById('total').innerHTML = totalFinal;
});