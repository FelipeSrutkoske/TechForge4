abstract class GerenciadorDeFavoritos {
  protected favoritos: string[] = [];

  abstract adicionarFavorito(item: string): void;

  obterFavoritos(): string[] {
    return this.favoritos;
  }
}

class GerenciadorDeFilmesFavoritos extends GerenciadorDeFavoritos {
  adicionarFavorito(item: string): void {
    if (!this.favoritos.includes(item)) {
      this.favoritos.push(item);
      this.favoritos.sort();
    }
  }
}

class GerenciadorDeLivrosFavoritos extends GerenciadorDeFavoritos {
  adicionarFavorito(item: string): void {
    if (!this.favoritos.includes(item)) {
      this.favoritos.unshift(item);
    }
  }
}
