function HealthLife() {
  let horas
  let pontos
  let dinheiro

  const UserInput = () => horas = parseInt(prompt("Informe quantas horas de atividade física você teve no mês: "))
  

  function CalcPontos() {
    if (horas < 10) {
      pontos = horas * 2
    }
    else if (horas >= 10 && horas <= 20) {
      pontos = horas * 5
    }
    else if (horas > 20) {
      pontos = horas * 10
    }
    else {
      document.write("Valor inválido.")
    }
    return dinheiro = parseFloat(pontos * 0.05)
  }

  const Mostrar = () => document.write(`Você acumulou ${pontos} pontos, logo, ganhou R$${dinheiro}.`)
  

  UserInput()
  CalcPontos()
  Mostrar()
}

HealthLife()