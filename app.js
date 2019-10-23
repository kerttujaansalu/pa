// Muutujad

// var
// muutujate defineerimine
var nimi = 'Kerttu'; //defineerimine
console.log(nimi);
nimi = 'Saskia'; // uue väärtuse omistamine
console.log(nimi);

// muutujate initsialiseerimine
var tervitus;
console.log(tervitus);
tervitus = 'Tere tulemast!';
console.log(tervitus);

//liitnimede kasutamine
var eesNimi = 'Kerttu'; //camel style
var ees_nimi = 'Kerttu'; //PHP style
var EesNimi = 'Kerttu'; // pascal style
var eesnimi = 'Kerttu';

// let
let pereNimi = 'Jaansalu';
console.log(pereNimi);
pereNimi = 'Eitea';
console.log(pereNimi);

// const
const minuEesNimi = 'Kerttu';
console.log(minuEesNimi);
minuEesNimi = 'Katrin';
//minuEesNimi = 'Kerttu';

// const kasutamise näide
const inimene = {nimi : 'Katrin', vanus : 20};
console.table(inimene);
inimene.vanus = 21;
console.table(inimene);

// const kasutamise näide 2
const arvud = [1, 2, 3, 4, 5];
console.log(arvud);
arvud.push(6);
console.log(arvud);
