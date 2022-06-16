function program() {

var productPrice
var promoPrice

const AskForPrice = () => productPrice = parseFloat(prompt("Informe o preço do produto: "))

const Discount = () => {return productPrice * 0.05}

  
  AskForPrice()

  promoPrice = parseFloat(productPrice - Discount(productPrice))

  document.write(`Initial value: ${productPrice}<br>Value after discount: ${promoPrice}`)
}

program()