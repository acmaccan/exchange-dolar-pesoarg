let form = document.getElementById('form');
let monto = document.getElementById('monto');
let cambio = document.getElementById('cambio');
let pais = document.getElementById('pais');
let ganancias = document.getElementById('ganancias');
let total = document.getElementById('total');
let dolarDia = document.getElementById('dolar-dia');

const dolarOficial = () => {
  fetch('/dolar', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    dolarDia.innerHTML = data;
  })
  .catch((err) => err);
};

dolarOficial();

const getDolar = (event) => {
  event.preventDefault();

  const dolar = dolarDia.textContent;

  let montoValue = Number(monto.value);
  //cambio = montoValue * 110.15;
  cambio = montoValue * Number(dolar).toFixed(2);

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
};

form.addEventListener('submit', getDolar);
