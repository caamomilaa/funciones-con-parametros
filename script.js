
function addNumbers (numberA, numberB) {
    const result = numberA + numberB;
    console.log (result);
    return result;
}
function doubleNumber (number) {
    const result = number * 2;
    console.log (result);
}

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