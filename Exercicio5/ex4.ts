abstract class SistemaDeVotacao {
  protected votos: Record<string, number> = {};

  abstract votarEm(candidato: string): void;
  abstract obterResultados(): object;
}

class Eleicao extends SistemaDeVotacao {
  votarEm(candidato: string): void {
    this.votos[candidato] = (this.votos[candidato] || 0) + 1;
  }

  obterResultados(): object {
    return this.votos;
  }
}

class Enquete extends SistemaDeVotacao {
  votarEm(candidato: string): void {
    this.votos[candidato] = (this.votos[candidato] || 0) + 1;
  }

  obterResultados(): object {
    const votosOrdenados = Object.entries(this.votos).sort(
      ([, a], [, b]) => b - a
    );
    return Object.fromEntries(votosOrdenados);
  }
}
