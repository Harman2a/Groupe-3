"use strict";
//Harman, Anas, Mikael, Kevin, Olivier.
/* Roulette Russe */
function rouletteRusse() {
    let joueur1 = prompt("Entrer votre nom (joueur 1)");
    let joueur2 = prompt("Entrer votre nom (joueur 2)");
    let balles = (Math.floor(Math.random() * 6));
    let tour = Math.floor(Math.random() * 2);
    if (tour = 0) {
        alert(joueur1 + " Tu commences");
    } else if (tour = 1) {
        alert(joueur2 + " Tu commences");
    }
    for(let i=0;i<=5;i++){
        if(i==balles){
            if(i%2==0){
                alert("Pan " + joueur1+ " Vous êtes mort");
                break;
            }
            else{
                alert("Pan " + joueur2 +" Vous êtes mort");
                break;
            }
        }
        if(i%2==0){
            alert(joueur1 +" Vous avez de la chance");
        }
        else{
            alert(joueur2 +" Vous avez de la chance");
        }
    }
}
rouletteRusse();

