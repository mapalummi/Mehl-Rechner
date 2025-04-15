'use strict';

const flour = 0.57;
let newAmountValue;

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
