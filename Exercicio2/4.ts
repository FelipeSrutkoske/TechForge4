class Temperatura {
  valor: number; // em Celsius

  constructor(valor: number) {
    this.valor = valor;
  }

  converterParaFahrenheit(): number {
    return (this.valor * 9) / 5 + 32;
  }

  converterParaKelvin(): number {
    return this.valor + 273.15;
  }
}