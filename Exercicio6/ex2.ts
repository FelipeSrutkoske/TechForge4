class GerenciadorDeUsuarios {
  criarUsuario(nome: string, email: string) {
    this.enviarNotificacaoPorEmail(email, "Bem-vindo!", "Sua conta foi criada com sucesso.");
  }

  enviarNotificacaoPorEmail(para: string, assunto: string, corpo: string) {
  }
}
