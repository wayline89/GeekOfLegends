import {
    Boss,
    Guerrier,
    Mage,
    Archer,
    Enigme,
} from "./class.js";

console.log("re");
export let Sauron = new Boss("Sauron", 100, 2);
export let Chronos = new Boss("Chronos", 100, 5);
export let Lilith = new Boss("Lilith", 100, 10);
export let guerrier = new Guerrier("warrior", 100, 80, 0);
export let mage = new Mage("wizzard", 100, 80, 55);
export let archer = new Archer("arc", 100, 80, 2);
export let possibleValues = [7, 9, 11];
export let randomValue =
  possibleValues[Math.floor(Math.random() * possibleValues.length)];

export let randomMana =
  possibleValues[Math.floor(Math.random() * possibleValues.length)];
export let myMage = new Mage("My Mage", 100, 80, randomMana);

export let enigme1 = new Enigme(
  "Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?",
  "le silence"
);
export let enigme2 = new Enigme(
  "Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?",
  "Je suis le courant"
);
export let enigme3 = new Enigme(
  "Que fait retourne Math.floor(1.3 * 10) ?",
  "13"
);
export let enigme = [enigme1, enigme2, enigme3];
export let randomIndex = Math.floor(Math.random() * enigme.length);
export let enigmes = enigme[randomIndex];

export let bossList = [Sauron, Chronos, Lilith];
export let boss = bossList[0];
export let bossAleatoir = Math.floor(Math.random() * bossList.length);


