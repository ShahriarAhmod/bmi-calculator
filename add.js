const toBn = (n) => n.replace(/\d/g, (d) => "0174716665"[d]);

let bmiValue = document.querySelector("#bmi-val");
let bmiStatus = document.querySelector("#bmi-status");

function getValue() {

  let weight = document.querySelector("#weight");
  let height = document.getElementById("height");
  

  document.getElementById("weight-val").textContent = toBn(
    weight.value + " কেজি"
  );

  document.getElementById("height-val").innerHTML = toBn(
    height.value + " সেমি"
  );

  calculateValue(Number(weight.value), Number(height.value));
}

function calculateValue(w, h) {
  let value = (w / Math.pow(h / 100, 2)).toFixed(1);
  bmiValue.innerHTML = toBn(value);
  if (value < 18.5) {
    bmiStatus.innerHTML = " কম ওজন ";
  } else if (value >= 18.5 && value <= 24.9) {
    bmiStatus.innerHTML = " স্বাভাবিক ";
  } else if (value >= 25 && value <= 29.9) {
    bmiStatus.innerHTML = " অতিরিক্ত ওজন ";
  } else {
    bmiStatus.innerHTML = " স্থূলতা ";
  }
}
