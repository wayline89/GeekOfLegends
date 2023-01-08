import { Sauron,Chronos,Lilith } from "./instances.js";


export class Boss {
    constructor(nom,pv,attack){
this.nom= nom;
this.pv= pv;
this.attack= attack;
    }
    Pvenigme() {
        if (this.pv < 20) {
          console.log(enigmes);
          for (let i = 0; i < 3; i++) {
            const answer = prompt("Reponse:");
            if (answer === enigmes.solution) {
              console.log("gagné");
              break;
            } else if (i === 2) {
              console.log("perdu");
            } else {
              console.log("Faux retry");
            }
          }
        }
      }      
}

export class Hero {
    constructor(nom, pv, attack) {
      this.nom = nom;
      this.pv = pv;
      this.attack = attack;
    }
  
    defense() {
      this.attack /= 2;
      this.pv *= 2.5;
    }

    attack(target) {
        this.attack *= 1.4;
        this.pv *= 0.75;
        console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.attack} points de dégâts.`);
        target.pv -= this.attack;
      }

  }
  

export function random(numbers) {
    return numbers[Math.floor(Math.random()*numbers.length)];
}
random([7, 9, 11]) 

export class Mage extends Hero {
    constructor(nom, pv, attack, mana) {
      super(nom, pv, attack);
      this.mana = mana;
    }
  

    attack(target) {
      if (this.mana < 2) {
        console.log(`${this.nom} doit attendre avant de pouvoir attaquer à nouveau.`);
        this.mana += 7;
        return;
      }
      this.mana -= 2;
      console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.attack} points de dégâts.`);
      target.pv -= this.attack;
    }
  }
  

export class Guerrier extends Hero {
    constructor(nom, pv, attack, rage = 0) {
      super(nom, pv, attack);
      this.rage = rage;
      this.bonusAttack = 0;
    }
  
    gainRage() {
      this.rage++;
      if (this.rage >= 4) {
        this.bonusAttack = this.attack * 0.25;
        this.rage = 0;
      }
    }
  }
  

 export class Archer extends Hero {
    constructor(nom, pv, attack, flêches) {
      super(nom, pv, attack);
      this.flêches = flêches;
    }
  
    attack(target) {
      if (this.flêches < 2) {
        console.log(`${this.nom} doit attendre avant de pouvoir attaquer à nouveau.`);
        this.flêches += 6;
        return;
      }
      this.flêches -= 2;
      console.log(`${this.nom} attaque ${target.nom} et lui inflige ${this.attack} points de dégâts.`);
      target.pv -= this.attack;
    }
  }
  
export class Enigme {
    constructor(question, solution) {
      this.question = question;
      this.solution = solution;
    }
  }
  
  export let enigme1 = new Enigme("Une fois que l'on me prononce, je n'existe plus. Qui suis-je ?", "le silence");
  export let enigme2 = new Enigme("Je suis d'eau,je suis d'air,et je suis d'électricité. Qui suis-je ?", "Je suis le courant");
  export let enigme3 = new Enigme("Que fait retourne Math.floor(1.3 * 10) ?", "13");
  export let enigme = [enigme1, enigme2, enigme3];
  
  export const randomIndex = Math.floor(Math.random() * enigme.length);
  export const enigmes = enigme[randomIndex];



const bossList = [Sauron, Chronos, Lilith];
const boss = random(bossList);

console.log(`Un boss ${boss.nom} est apparu !`);

// Combat au tour par tour
while (boss.pv > 0 && (guerrier.pv > 0 || mage.pv > 0 || archer.pv > 0)) {
  // Tour du boss
  console.log(`${boss.nom} attaque !`);
  guerrier.pv -= boss.attack;
  mage.pv -= boss.attack;
  archer.pv -= boss.attack;

  console.log(`${guerrier.nom} a ${guerrier.pv} PV, ${mage.nom} a ${mage.pv} PV, ${archer.nom} a ${archer.pv}.`);

  // Tour des héros
  console.log(`Au tour des héros d'attaquer !`);
  let action = prompt("Que voulez-vous faire ? (attaque/defense)");
  if (action === "attaque") {

    
    let target = prompt(`Qui voulez-vous attaquer ? (${boss.nom})`);
    if (target === boss.nom) {
        guerrier.attack(boss);
        mage.attack(boss);
        archer.attack(boss);
      console.log(`${boss.nom} a ${boss.pv} PV.`);
    } else {
      console.log(`Cible inconnue.`);
    }
  } else if (action === "defense") {
    guerrier.defense();
    mage.defense();
    archer.defense();

  } else {
    console.log(`Action inconnue.`);
  }
}

// Fin du combat
if (boss.pv <= 0) {
  console.log(`${boss.nom} a été vaincu !`);
} else {
  console.log(`Tous les héros ont été vaincus !`);
}