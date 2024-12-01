abstract class Inventario {
  protected itens: Record<string, number> = {};

  abstract adicionarItem(item: string, quantidade: number): void;
  abstract removerItem(item: string): void;

  obterInventario(): Record<string, number> {
    return this.itens;
  }
}

class InventarioDeDeposito extends Inventario {
  adicionarItem(item: string, quantidade: number): void {
    this.itens[item] = (this.itens[item] || 0) + quantidade;
  }

  removerItem(item: string): void {
    if (this.itens[item]) {
      this.itens[item]--;
      if (this.itens[item] === 0) {
        delete this.itens[item];
      }
    }
  }
}

class InventarioDeLoja extends Inventario {
  adicionarItem(item: string, quantidade: number): void {
    const quantidadeAtual = this.itens[item] || 0;
    if (quantidadeAtual + quantidade <= 10) {
      this.itens[item] = quantidadeAtual + quantidade;
    } else {
      this.itens[item] = 10;
    }
  }

  removerItem(item: string): void {
    if (this.itens[item]) {
      this.itens[item]--;
      if (this.itens[item] === 0) {
        delete this.itens[item];
      }
    }
  }
}
