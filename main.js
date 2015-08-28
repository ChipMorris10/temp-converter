// Find out the temperature the user wants to convert and if they want to go
// from C to F, or F to C
var temp = prompt("What is the temperature you want to convert?");
var celciusFahrenheit = prompt("Do you want to convert that to Celsius or Fahrenheit?");

// If the user entered Fahrenheit. .toFixed rounds down to 1 digit.
if (celciusFahrenheit === "Fahrenheit") {

  returnTemp = ((5/9) * (temp - 32)).toFixed(1);
  alert("The temperature is " + returnTemp);
}

// If the user entered Celsius. .toFixed rounds down to 1 digit.
else {
  returnTemp = ((temp * (9/5) + 32)).toFixed(1);
  alert ("The temperature is " + returnTemp);
}
