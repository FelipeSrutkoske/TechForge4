abstract class GerenciadorDeTarefas {
  protected listaDeTarefas: { tarefa: string; tipo: string }[] = [];

  abstract adicionarTarefa(tarefa: string, tipo: string): void;

  listarTarefas(): string[] {
    return this.listaDeTarefas.map((tarefa) => tarefa.tarefa);
  }
}

class Projeto extends GerenciadorDeTarefas {
  private nomeDoProjeto: string;

  constructor(nomeDoProjeto: string) {
    super();
    this.nomeDoProjeto = nomeDoProjeto;
  }

  adicionarTarefa(tarefa: string): void {
    if (
      !this.listaDeTarefas.some(
        (t) => t.tarefa === tarefa && t.tipo === "projeto"
      )
    ) {
      this.listaDeTarefas.push({ tarefa, tipo: "projeto" });
    }
  }
}

class TarefasDiarias extends GerenciadorDeTarefas {
  adicionarTarefa(tarefa: string): void {
    if (
      !this.listaDeTarefas.some(
        (t) => t.tarefa === tarefa && t.tipo === "diaria"
      )
    ) {
      this.listaDeTarefas.push({ tarefa, tipo: "diaria" });
    }
  }
}
