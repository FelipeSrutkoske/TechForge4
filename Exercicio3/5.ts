abstract class Funcionario {
  private nome: string;
  private salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  abstract calcularBonus(): number;

  getNome(): string {
    return this.nome;
  }

  getSalario(): number {
    return this.salario;
  }
}

class Gerente extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.1;
  }
}

class Operario extends Funcionario {
  calcularBonus(): number {
    return this.getSalario() * 0.05;
  }
}

const funcionarios: Funcionario[] = [
  new Gerente("João", 5000),
  new Operario("Maria", 3000),
];

function calcularSalarioComBonus(funcionarios: Funcionario[]): void {
  funcionarios.forEach((funcionario) => {
    const salarioFinal = funcionario.getSalario() + funcionario.calcularBonus();
    console.log(
      `Salário final de ${funcionario.getNome()}: ${salarioFinal}`
    );
  });
}

calcularSalarioComBonus(funcionarios);