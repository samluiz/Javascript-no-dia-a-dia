function Array10() {

  let numbers = []
  let position = 0

  function Povoar() {
    for (let i = 0; i < 10; i++) {
      numbers[i] = Math.floor(Math.random() * 100)
      document.write(numbers[i], " | ")
    }
  }

  function Pares() {
    for (let i = 0; i <= numbers.length; i++) {
      if (numbers[i] % 2 == 0) {
        position = i
        document.write("<br><br>PAR: ", numbers[i], " <br>POSIÇÃO: ", position)
      }
    }
  }

  Povoar()
  Pares()
}

Array10()