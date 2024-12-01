class ValidadorDeContato {
  validarEmail(email: string): boolean {
    return true
  }
}

class EnviadorDeEmails {
  validadorDeContato: ValidadorDeContato;

  constructor(validadorDeContato: ValidadorDeContato) {
    this.validadorDeContato = validadorDeContato;
  }

  enviarEmail(para: string, assunto: string, corpo: string) {
    if (this.validadorDeContato.validarEmail(para)) {
    } else {
    }
  }
}
