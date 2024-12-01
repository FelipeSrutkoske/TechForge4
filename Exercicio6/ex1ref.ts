class Carrinho {
  itens: { nome: string; preco: number }[] = [];

  adicionarItem(nome: string, preco: number) {
    this.itens.push({ nome, preco });
  }

  calcularPrecoTotal(): number {
    return this.itens.reduce((total, item) => total + item.preco, 0);
  }
}

class Pagamento {
  processarPagamento(): void {
  }
}

class Envio {
  atualizarStatusDoEnvio(novoStatus: string): void {
  }
}

class Pedido {
  carrinho: Carrinho;
  pagamento: Pagamento;
  envio: Envio;
  precoTotal: number;
  statusDoPagamento: string = "pendente";
  statusDoEnvio: string = "pendente";

  constructor(carrinho: Carrinho, pagamento: Pagamento, envio: Envio) {
    this.carrinho = carrinho;
    this.pagamento = pagamento;
    this.envio = envio;
    this.precoTotal = this.carrinho.calcularPrecoTotal();
  }

  processarPedido() {
    this.pagamento.processarPagamento();
    this.statusDoPagamento = "pago";
    this.envio.atualizarStatusDoEnvio("enviado");
    this.statusDoEnvio = "enviado";
  }
}
