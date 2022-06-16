function Locadora() {

let qtKm
let qtDias
let preco

  function UserInput() {
    qtKm = parseInt(prompt("Informe a quantidade de Km percorridos: "))
    qtDias = parseInt(prompt("Informe a quantidade de dias que o carro esteve alugado: "))
  }

  const CalcPreco = () => preco = parseFloat((qtDias * 90) + (qtKm * 0.20))

  const Mostrar = () => 
    document.write(`Dias alugado: ${qtDias}<br>Km percorridos: ${qtKm}km<br>Preço total: R$${CalcPreco(qtDias, qtKm)}`)

  UserInput()
  CalcPreco()
  Mostrar()


}

Locadora()