function convertTemperature() {
  var temp = document.getElementById("temperature").value;
  var unit = document.getElementById("unit").value;
  var result = document.getElementById("result");

  // Validation
  if (temp === "" || isNaN(temp)) {
    result.innerHTML = "⚠ Please enter a valid number!";
    result.style.color = "red";
    return;
  }

  temp = parseFloat(temp);
  var converted = "";

  // Conversion Logic
  if (unit === "celsius") {
    var toF = (temp * 9/5) + 32;
    var toK = temp + 273.15;
    converted = temp + " °C = " + toF.toFixed(2) + " °F | " + toK.toFixed(2) + " K";
  } 
  else if (unit === "fahrenheit") {
    var toC = (temp - 32) * 5/9;
    var toK = (temp - 32) * 5/9 + 273.15;
    converted = temp + " °F = " + toC.toFixed(2) + " °C | " + toK.toFixed(2) + " K";
  } 
  else if (unit === "kelvin") {
    var toC = temp - 273.15;
    var toF = (temp - 273.15) * 9/5 + 32;
    converted = temp + " K = " + toC.toFixed(2) + " °C | " + toF.toFixed(2) + " °F";
  }

  result.innerHTML = converted;
  result.style.color = "#222";
}
