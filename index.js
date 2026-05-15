// TEMPERATURE CONVERSION PROGRAM

const celsiusInput = document.getElementById("celsiusInput");
const fahrenheitOutput = document.getElementById("fahrenheitOutput");

const fahrenheitInput = document.getElementById("fahrenheitInput");
const celsiusOutput = document.getElementById("celsiusOutput");

/* Celsius → Fahrenheit */

celsiusInput.addEventListener("input", function () {
  let celsius = Number(celsiusInput.value);

  let fahrenheit = (celsius * 9) / 5 + 32;

  fahrenheitOutput.value = fahrenheit.toFixed(1);
});

/* Fahrenheit → Celsius */

fahrenheitInput.addEventListener("input", function () {
  let fahrenheit = Number(fahrenheitInput.value);

  let celsius = ((fahrenheit - 32) * 5) / 9;

  celsiusOutput.value = celsius.toFixed(1);
});
