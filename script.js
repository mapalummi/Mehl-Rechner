'use strict';

const flour = 0.57;
let newAmountValue;
const inputField = document.getElementById('input_field');
const resultField = document.getElementById('result_field');
const button = document.getElementById('calcButton');

// Event-Listener für Echtzeit-Updates
inputField.addEventListener('input', toggleButton);
button.addEventListener('click', calculateFlour);

function calculateFlour() {
  getInput();

  // Debugging: Wert aus dem Eingabefeld prüfen
  console.log('Eingabewert:', newAmountValue);

  if (isNaN(newAmountValue) || newAmountValue <= 0) {
    resultField.innerHTML = `<p>Bitte eine gültige Zahl eingeben</p>`;
    return;
  }

  calculateAmount();
  clearAndDisable();
}

function toggleButton() {
  // Button aktivieren/deaktivieren, basierend auf dem Eingabewert
  const value = inputField.value.trim();
  button.disabled = value === '' || isNaN(parseFloat(value));
}

function getInput() {
  // Wert des Input-Feldes auslesen und in eine Zahl umwandeln
  const inputFieldValue = inputField.value.trim();

  // Debugging: Rohwert aus dem Input-Feld anzeigen
  console.log('Rohwert aus Input-Feld:', inputFieldValue);

  // Wert in eine Zahl umwandeln
  newAmountValue = parseFloat(inputFieldValue);

  // Debugging: Geparster Wert prüfen
  console.log('Geparster Wert:', newAmountValue);

  // Überprüfen, ob der Wert leer oder ungültig ist
  if (inputFieldValue === '') {
    console.log('Eingabefeld ist leer.');
  }
  if (isNaN(newAmountValue)) {
    console.log('Der Wert ist keine gültige Zahl:', inputFieldValue);
  }
}

function clearAndDisable() {
  button.disabled = true;
}

function calculateAmount() {
  const result = newAmountValue / flour;
  const newResult = Math.round(result);

  showResult(newResult);
}

function showResult(newResult) {
  resultField.innerHTML = `<p>${newResult} ml</p>`;
}
