class NotificacaoPorEmail {
  enviarEmail(para: string, assunto: string, corpo: string) {
  }
}

class GerenciadorDeUsuarios {
  notificacaoPorEmail: NotificacaoPorEmail;

  constructor(notificacaoPorEmail: NotificacaoPorEmail) {
    this.notificacaoPorEmail = notificacaoPorEmail;
  }

  criarUsuario(nome: string, email: string) {
    this.notificacaoPorEmail.enviarEmail(email, "Bem-vindo!", "Sua conta foi criada com sucesso.");
  }
}
