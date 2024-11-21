class Pagamento {
  processar(): void {
    console.log("Processando pagamento...");
  }
}

class PagamentoCartao extends Pagamento {
  numeroCartao: string;

  constructor(numeroCartao: string) {
    super();
    this.numeroCartao = numeroCartao;
  }

  processar(): void {
    // Validação do número do cartão (simplificada)
    if (this.numeroCartao.length === 16) {
      console.log("Pagamento com cartão processado com sucesso!");
    } else {
      console.log("Número de cartão inválido!");
    }
  }
}

class PagamentoBoleto extends Pagamento {
  processar(): void {
    const codigoBoleto = Math.floor(Math.random() * 1000000000);
    console.log(`Boleto gerado com código: ${codigoBoleto}`);
  }
}

const pagamentos: Pagamento[] = [
  new PagamentoCartao("1234567890123456"),
  new PagamentoBoleto(),
];

pagamentos.forEach((pagamento) => pagamento.processar());