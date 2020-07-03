const weightConvertionValue = 2.20462;
function calculatePoundsToKilo(params) {
  console.log(params); 
  console.log (document.getElementById('pounds').value) ;
  const poundsValue = document.getElementById('pounds').value;
  let kilos = poundsValue /weightConvertionValue;
  document.getElementById('kilos').value = kilos;
}
function calculateKiloToPounds(params) {
    console.log('hola');
    const kilosValues = document.getElementById('kilos').value;
    let pounds = kilosValues*weightConvertionValue;
    document.getElementById('pounds').value = pounds;

}
document.getElementById('pounds').addEventListener('input',calculatePoundsToKilo);
document.getElementById('kilos').addEventListener('input',calculateKiloToPounds);


function calculateCelciusToFahrenheit(params) {
    console.log(params);
    console.log(document.getElementById('celcius').value);
    const celciusValue = document.getElementById('celcius').value;
    let fahrenheit = (celciusValue * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit;
    
}
function calculateFahrenheitToCelcius(params) {
    console.log(params);
    console.log(document.getElementById('fahrenheit').value);
    const fahrenheitValue = document.getElementById('fahrenheit').value;
    let celcius = (fahrenheitValue- 32)*5/9;
    document.getElementById('celcius').value = celcius;
}
document.getElementById('celcius').addEventListener('input',calculateCelciusToFahrenheit);
document.getElementById('fahrenheit').addEventListener('input',calculateFahrenheitToCelcius);


function calculateKilometersToMeters(params) {
    console.log(params);
    console.log(document.getElementById('kilometers').value);
    const kilometersValue = document.getElementById('kilometers').value;
    let meters = kilometersValue/1000;
    document.getElementById('meters').value = meters; 
    
}
function calculateMetersToKilometers(params) {
    console.log(params);
    console.log(document.getElementById('meters').value);
    const metersValue = document.getElementById('meters').value;
    let kilometers = metersValue*1000;
    document.getElementById('kilometers').value = kilometers;
    
}
document.getElementById('kilometers').addEventListener('input',calculateKilometersToMeters);
document.getElementById('meters').addEventListener('input',calculateMetersToKilometers);