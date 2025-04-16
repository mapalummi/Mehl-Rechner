'use strict';

const flour = 0.57;
let newAmountValue;

document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.getElementById('input_field');
  const button = document.getElementById('calcButton');

  // Aktiviert den Button, wenn eine Zahl eingegeben wird
  inputField.addEventListener('input', function () {
    button.disabled = inputField.value.trim() === '';
  });

  // Deaktiviert den Button nach Absenden und leert das Eingabefeld
  button.addEventListener('click', function () {
    inputField.value = ''; // Eingabefeld leeren
    button.disabled = true; // Button wieder deaktivieren
  });
});

function calculateFlour() {
  getInput();
  clearInput();
  calculateAmount();
}

function getInput() {
  let amountValue = document.getElementById('input_field').value;
  newAmountValue = parseInt(amountValue);
}

function clearInput() {
  document.getElementById('input_field').value = '';
}

function calculateAmount() {
  let result = newAmountValue / flour;
  let newResult = Math.round(result);

  showResult(newResult);
}

function showResult(newResult) {
  document.getElementById('result_field').innerHTML = '';
  document.getElementById('result_field').innerHTML += /*html*/ `
        <p>${newResult} ml</p>
    `;
}
