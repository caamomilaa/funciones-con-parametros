//Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".
function sayHello(name) {
  const greeting = "Hola " + name;
  console.log(greeting);
}
function addNumbers (numberA, numberB) {
    const result = numberA + numberB;
    console.log (result);
    return result;
}
function doubleNumber (number) {
    const result = number * 2;
    console.log (result);
}
sayHello("Camila");

//Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.
function calculateSquareArea(side) {
  const result = side * side;
  console.log(result);
}
calculateSquareArea(5);
function calculateTriangleArea(base, height) {
  const result = (base * height) / 2;
  console.log(result);
}
calculateTriangleArea(3, 2);
function calculateCircleArea(radius) {
  const result = 3.14 * radius * radius;
  console.log(result);
}
calculateCircleArea(5);
function celsiusToFarenheit(celsius) {
  const farenheit = celsius * 1.8 + 32;
  console.log(farenheit);
}
celsiusToFarenheit(26);
function farrnheitToCelsius(farenheit) {
  const celsius = (farenheit - 32) / 1.8;
  console.log(celsius);
}
farrnheitToCelsius(26);
function totalPrice(price) {
  const iva = price + price * 0.21;
  console.log(iva);
}
totalPrice(100);
function writeMessage (name, material, size, note){
    const result= name + ' ha pedido una caja de ' + material+ ' de tamaño ' +size+'. '+note
    console.log(result)
    }
    writeMessage('Agripino','cartón','mediano','mamagüevo digo glugluglu')
const sumResult = addNumbers (4,7);

doubleNumber (sumResult);


function media (numberA, numberB, numberC){
    const media = (numberA + numberB + numberC) / 3;
    return media;
}
const result = media(10,20,40);
console.log(result);


function discount(discount, price){
    const pdiscount= price - (price*discount)/100;
    return pdiscount;
}
const dresult = discount (10, 100);
console.log(dresult);

function words(word1, word2){
    const palabra = word1 + '-' + word2;
    return palabra;
}
const wresult = words ('camila', 'alberto');
console.log(wresult);

const getMeters = (kilometers) => kilometers * 1000;
const totalMeters = getMeters (16);
console.log (totalMeters);


function getSeconds(hours) {
    return hours * 3600;
}
function getSpeedInmetersPerSecond(speed) {
    const meters= getMeters(speed);
    const seconds = getSeconds (1);
    return meters / seconds;
}

const convertedSpeed = getSpeedInmetersPerSecond (100);
console.log(convertedSpeed)
