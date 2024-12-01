class EnviadorDeEmails {
  enviarEmail(para: string, assunto: string, corpo: string) {
    if (this.validarEmail(para)) {
    } else {
    }
  }

  validarEmail(email: string): boolean {
    return true;
  }
}
