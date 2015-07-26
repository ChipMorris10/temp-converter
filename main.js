// Find out the temperature the user wants to convert and if they want to go
// from C to F, or F to C
var temp = prompt("What is the temperature you want to convert?");
var celciusFahrenheit = prompt("Do you want to convert that to Celsius or Fahrenheit?");

// If the user entered Fahrenheit
if (celciusFahrenheit === "Fahrenheit") {
  temp = (5/9) * (temp - 32);
  alert("The temperature is " + temp);
}

// If the user entered Celsius
else {
  temp = (9/5) * (temp + 32);
  alert ("The temperature is " + temp);
}