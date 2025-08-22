// Array con feriados nacionales 2025 en Argentina (considerados como no hábiles)
const feriados2025 = [
  '2025-01-01',
  '2025-03-03', '2025-03-04', '2025-03-24',
  '2025-04-02', '2025-04-18',
  '2025-05-01', '2025-05-02', '2025-05-25',
  '2025-06-17', '2025-06-20',
  '2025-07-09',
  '2025-08-17',
  '2025-10-12',
  '2025-11-21', '2025-11-24',
  '2025-12-08', '2025-12-25'
];

// Función para determinar si una fecha es hábil
function esHabil(date) {
  const weekday = date.getDay(); // 0=domingo, 6=sábado
  const iso = date.toISOString().slice(0, 10);
  return weekday !== 0 && weekday !== 6 && !feriados2025.includes(iso);
}

// Función que calcula el 4º día hábil del mes dado (mes: 1-12)
function cuartoDiaHabil(year, month) {
  let count = 0;
  const date = new Date(year, month - 1, 1);
  while (count < 4) {
    if (esHabil(date)) count++;
    if (count < 4) date.setDate(date.getDate() + 1);
  }
  return date;
}

document.getElementById('calculateBtn').addEventListener('click', () => {
  const month = parseInt(document.getElementById('monthSelect').value, 10);
  const resultado = cuartoDiaHabil(2025, month);
  const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const texto = resultado.toLocaleDateString('es-AR', opciones);
  document.getElementById('result').textContent = `El día de cobro es: ${texto}`;
});
