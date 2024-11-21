class Agenda {
  compromissos: string[] = [];

  adicionarCompromisso(compromisso: string): void {
    this.compromissos.push(compromisso);
  }

  listarCompromissos(): void {
    this.compromissos.forEach((compromisso) => console.log(compromisso));
  }
}