import { Guerrier, Boss, Hero, Mage, Archer, Enigme, enigme } from "./class.js";

export let Sauron = new Boss("Sauron", 100, 2);
export let Chronos = new Boss("Chronos", 100, 5);
export let Lilith = new Boss("Lilith", 100, 10);

export let guerrier = new Guerrier("warrior", 100, 80, 0);

export let mage = new Mage("wizzard", 100, 80, 55);

export let archer = new Archer("arc", 100, 80, 2);

export let possibleValues = [7, 9, 11];
export const randomValue =
  possibleValues[Math.floor(Math.random() * possibleValues.length)];

export const randomMana =
  possibleValues[Math.floor(Math.random() * possibleValues.length)];
export const myMage = new Mage("My Mage", 100, 80, randomMana);
