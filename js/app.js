import { Boss, Hero, Mage, Archer, Guerrier,  enigme,
    enigme1,
    enigme2,
    enigme3, } from "./modules/class.js";
import {
  Chronos,
  Lilith,
  Sauron,
  mage,
  guerrier,
  archer,
  myMage,

} from "./modules/instances.js";

console.log(Sauron);
console.log(Sauron.nom + " perd " + mage.attack + " de vie");

console.log(Chronos);
console.log(Chronos.nom + " perd " + mage.attack + " de vie");

console.log(Lilith);
console.log(Lilith.nom + " perd " + mage.attack + " de vie");

console.log(mage);
console.log(mage.nom + " perd " + Lilith.attack + " de vie");

console.log(guerrier);
console.log(guerrier.nom + " perd " + Lilith.attack + " de vie");

console.log(archer);
console.log(archer.nom + " perd " + Lilith.attack + " de vie");

console.log(myMage);
Sauron.Pvenigme();

