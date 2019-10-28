// tsüklid

// while
//eelkontrolliga tsükkel
// defineerime numbri
let arv = 5; 
// defineerime jagaja algväärtuse
let jagaja = 2;
// suurendame jagaja väärtust niikaua kui
// jagamise jääk on 0
while(arv % jagaja != 0){
    jagaja++;
}
// kontrollime kas jagasime sama arvuga
if(arv == jagaja) {
    console.log(arv + ' on algarv');
} else {
    console.log(arv + ' ei ole algarv');
}
