//Crea una función llamada sayHello que reciba un nombre por parámetro y diga por consola "hola [nombre]".
function sayHello(name) {
  const greeting = "Hola " + name;
  console.log(greeting);
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