function Detran() {
  let velCarro
  let valMulta
  let multa = false

  const UserInput = () => velCarro = parseInt(prompt("Qual a velocidade do carro? "))

  function ChecagemMulta() {
    if (velCarro > 80) {
      document.write("Você foi multado.")
      return multa = true
    }
    else {
      document.write("Você não foi multado. Parabéns!")
      return multa = false
    }
  }

  function ValorMulta() {
    if (multa == true) {
      return valMulta = (velCarro - 80) * 5
    }
    else {}
  }

  function Mostrar() {
    if (multa == true) {
      return document.write(`Valor da multa: R$${ValorMulta(velCarro)}`)
    }
    else {}
  }

  UserInput()
  ChecagemMulta()
  Mostrar()
}

Detran()