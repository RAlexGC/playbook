// Ejemplo 5: Objeto con método que recibe parámetros
const myPet = {
    name: "Wendy",
    sayHelloToMyPet: function(yourPet){
      console.log(`${this.name} says hello to ${yourPet}`)
    }
  }
  
  console.log("Ejemplo 5: Objeto con método que recibe parámetros")
  myPet.sayHelloToMyPet("Pulga")