import { Boss, Hero, Mage, Guerrier, Archer, Enigme } from "./modules/class.js";

import {
  Chronos,
  Lilith,
  Sauron,
  guerrier,
  mage,
  archer,
  possibleValues,
  randomValue,
  randomMana,
  myMage,
  enigme1,
  enigme2,
  enigme3,
  enigme,
  randomIndex,
  enigmes,
  bossList,
  boss,
  bossAleatoir,
} from "./modules/instances.js";

// console.log(Sauron);
// console.log(Sauron.nom + " perd " + mage.attack + " de vie");

// console.log(Chronos);
// console.log(Chronos.nom + " perd " + mage.attack + " de vie");

// console.log(Lilith);
// console.log(Lilith.nom + " perd " + mage.attack + " de vie");

// console.log(mage);
// console.log(mage.nom + " perd " + Lilith.attack + " de vie");

// console.log(guerrier);
// console.log(guerrier.nom + " perd " + Lilith.attack + " de vie");

// console.log(archer);
// console.log(archer.nom + " perd " + Lilith.attack + " de vie");

// console.log(myMage);
// Sauron.Pvenigme();

// console.log(`Un boss ${boss.nom} est apparu !`);

console.log(`Un boss ${boss.nom} est apparu !`);
let pvMax = boss.pv 
// Combat au tour par tour

while (boss.pv > 0 && (guerrier.pv > 0 || mage.pv > 0 || archer.pv > 0)) {
  // Tour du boss
  console.log(`${boss.nom} attaque !`);
  guerrier.pv -= boss.attack;
  mage.pv -= boss.attack;
  archer.pv -= boss.attack;

  console.log(
    `${guerrier.nom} a ${guerrier.pv} PV, ${mage.nom} a ${mage.pv} PV, ${archer.nom} a ${archer.pv}.`
  );

  // Tour des héros
  console.log(`Au tour des héros d'attaquer !`);
  let action = prompt("Que voulez-vous faire ? (attaque(A)/(B)defense)");
  if (action === "A") {
    let target = prompt(`Qui voulez-vous attaquer ? (${boss.nom})`);
    if (target === boss.nom) {
      guerrier.gainRage(boss);
      console.log(`${boss.nom} a ${boss.pv} PV.`);
      mage.manna(boss);
      console.log(`${boss.nom} a ${boss.pv} PV.`);
      archer.robin(boss);
      console.log(`${boss.nom} a ${boss.pv} PV.`);
    } else {
      console.log(`Cible inconnue.`);
    }
  } else if (action === "B") {
    guerrier.defense();
    mage.defense();
    archer.defense();
  } else {
    console.log(`Action inconnue.`);
  }
}

 if (boss.pv <= pvMax / 5) {
  boss.Pvenigme(enigmes);
}

// Fin du combat
if (boss.pv <= 0) {
  console.log(`${boss.nom} a été vaincu !`);
} else {
  console.log(`Tous les héros ont été vaincus !`);
}
