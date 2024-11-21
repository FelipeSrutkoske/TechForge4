class Animal {
  private energia: number;

  constructor(energiaInicial: number) {
    this.energia = energiaInicial;
  }

  comer(): void {
    this.energia += 10;
  }

  statusEnergia(): void {
    console.log(`Energia do animal: ${this.energia}`);
  }

  getEnergia(): number {
    return this.energia;
  }

  setEnergia(energia: number): void {
    this.energia = energia;
  }
}

class Leao extends Animal {
  comer(): void {
    this.setEnergia(this.getEnergia() - 5); 
    super.comer(); 
    console.log("Leão caçou e comeu!");
  }
}

class Passaro extends Animal {
  comer(): void {
    super.comer();
    console.log("Pássaro se alimentou!");
  }
}

const leao = new Leao(50);
const passaro = new Passaro(30);

leao.comer();
leao.statusEnergia(); 
passaro.comer();
passaro.statusEnergia(); 