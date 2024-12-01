interface LivroBiblioteca {
  titulo: string;
  autor: string;
  genero: string;
  disponivel: boolean;
}

class BibliotecaGestao {
  livros: LivroBiblioteca[];

  constructor(livros: LivroBiblioteca[]) {
    this.livros = livros;
  }

  filtrarPorGenero(genero: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.genero === genero);
  }

  buscarPorAutor(autor: string): LivroBiblioteca[] {
    return this.livros.filter((livro) => livro.autor === autor);
  }

  obterLivrosDisponiveisOrdenados(): LivroBiblioteca[] {
    return this.livros
      .filter((livro) => livro.disponivel)
      .sort((a, b) => a.titulo.localeCompare(b.titulo));
  }
}
