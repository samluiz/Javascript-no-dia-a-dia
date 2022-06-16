function NomePesquisa() {

  let nomes = []
  let pesquisa
  let position
  let resultado = false


  function Povoar() {
    for (let i = 0; i < 7; i++) {
      nomes[i] = prompt("Digite o nome que deseja armazenar:")
    }
  }

  function Pesquisar() {
    pesquisa = prompt("Digite o nome que deseja pesquisar: ")
    for (let i = 0; i <= nomes.length; i++) {
      if (pesquisa == nomes[i]) {
        resultado = true
        position = i
      }
      else {   
      }
    }
  }

  function Mostrar() {
    if (resultado == true) {
      document.write(`O nome ${pesquisa} se encontra na posição ${position}`)
    }
    else {
      document.write("O nome não foi encontrado.")
    }
  }

  Povoar()
  Pesquisar()
  Mostrar()
}

NomePesquisa()