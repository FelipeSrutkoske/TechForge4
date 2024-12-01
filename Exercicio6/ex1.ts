class Pedido {
  itens: { nome: string; preco: number }[] = [];
  precoTotal: number = 0;
  statusDoPagamento: string = "pendente";
  statusDoEnvio: string = "pendente";

  adicionarItem(nome: string, preco: number) {
    this.itens.push({ nome, preco });
    this.calcularPrecoTotal();
  }

  calcularPrecoTotal() {
    this.precoTotal = this.itens.reduce((total, item) => total + item.preco, 0);
  }

  processarPagamento() {
    this.statusDoPagamento = "pago";
  }

  atualizarStatusDoEnvio(novoStatus: string) {
    this.statusDoEnvio = novoStatus;
  }
}
