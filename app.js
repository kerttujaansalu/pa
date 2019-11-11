// scope - nähtavus

//globaalne muutujate defineerimine
var a = 1;
let b = 2;
const c = 3;

// plokk
if(true) {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Plokk: ', a, b, c);
}

for(var a = 0; a < 10; a++); {
    console.log('Tsükkel: ', a);
}

// funktsioonipõhine
function testScope(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Funktsioon: ', a, b, c);
}

testScope();
console.log('Globaalne: ', a, b, c);

