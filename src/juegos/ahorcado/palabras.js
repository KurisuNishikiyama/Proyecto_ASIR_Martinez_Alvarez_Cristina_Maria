var palabras = [
  "ORDENADOR",
  "HARDWARE",
  "SOFTWARE",
  "PERIFERICO",
  "RATON",
  "TECLADO",
  "PROGRAMA",
  "EMAIL",
  "LINK",
  "VIRUS",
  "WIFI",
  "RED",
  "BUG",
  "SISTEMA",
  "ERROR",
  "BYTE",
  "CACHE",
  "HACKER",
  "ICONO",
  "INTERNET",
  "JUMPER",
  "KERNEL",
  "LED"
];

function numAleatorio() {
  let numAleatorio = Math.floor(Math.random() * palabras.length);
}
export { numAleatorio };