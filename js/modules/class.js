


// Enigme du méchant <20%

// import { enigmes } from "./instances";

export class Enigme {
  constructor(question, solution) {
    this.question = question;
    this.solution = solution;
  }
}

// le Méchant:
export class Boss {
  constructor(nom, pv, attack) {
    this.nom = nom;
    this.pv = pv;
    this.attack = attack;
  }
  Pvenigme(enigme) {
      console.log(enigme);
      for (let i = 0; i < 3; i++) {
        let answer = prompt("Reponse:");
        if (answer === enigme.solution) {
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

// Hero de base: 

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
    console.log(
      `${this.nom} attaque ${target.nom} et lui inflige ${this.attack} points de dégâts.`
    );
    target.pv -= this.attack;
  }
}

export function random(numbers) {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
random([7, 9, 11]);

// Hero Mage

export class Mage extends Hero {
  constructor(nom, pv, attack, mana) {
    super(nom, pv, attack);
    this.mana = mana;
  }

  manna(target) {
    if (this.mana < 2) {
      console.log(
        `${this.nom} doit attendre avant de pouvoir attaquer à nouveau.`
      );
      this.mana += random;
      return;
    }
    this.mana -= 2;
    console.log(
      `${this.nom} attaque ${target.nom} et lui inflige ${this.attack} points de dégâts.`
    );
    target.pv -= this.attack;
  }
}

// Hero Guerrier:

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

// Hero Archer:

export class Archer extends Hero {
  constructor(nom, pv, attack, flêches) {
    super(nom, pv, attack);
    this.flêches = flêches;
  }

  robin(target) {
    if (this.flêches < 2) {
      console.log(
        `${this.nom} doit attendre avant de pouvoir attaquer à nouveau.`
      );
      this.flêches += 6;
      return;
    }
    this.flêches -= 2;
    console.log(
      `${this.nom} attaque ${target.nom} et lui inflige ${this.attack} points de dégâts.`
    );
    target.pv -= this.attack;
  }
}

