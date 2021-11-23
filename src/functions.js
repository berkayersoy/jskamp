//productName="Elma" is default
//default param is written at the end
function addToCart(quantity, productName = "Elma") {
    console.log("Sepete eklendi : " + productName + ", " + "adet " + quantity);
}

//addToCart() //undefined, doesn't pop up a error in JS
//addToCart("Yumurta",10)
//addToCart("Karpuz")

//arrow function
let sayHello = () => {
    console.log("Hello");
}
//sayHello()

let sayHello2 = function (params) {
    console.log("Hello 2")
}
//sayHello2()


//Function
function addToCart2(productName, quantity, unitPrice) {
}
//addToCart2("Elma",5,1)
//addToCart2("Armut",3,1.5)

//obje
let product1 = { productName: "Elma", unitPrice: 1, quantity: 5 }

function addToCart3(product) {
    console.log("Product: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unitPrice)
}

//addToCart3(product1)

let product2 = { productName: "Elma", unitPrice: 1, quantity: 5 }
let product3 = { productName: "Elma", unitPrice: 1, quantity: 5 }

// REFERENCE TYPE
product2 = product3
product2.productName = "KARPUZ"
//console.log(product3.productName)

// NUMBERS ARE VALUE TYPE
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
//console.log(sayi1)


function addToCart4(products) {
    console.log(products)
}

//objects inside the array
let products = [
    { productName: "Elma", unitPrice: 1, quantity: 5 },
    { productName: "Armut", unitPrice: 1, quantity: 5 },
    { productName: "Karpuz", unitPrice: 1, quantity: 5 }
]

//addToCart4(products);


//rest operator, put the rest at the end so it will not take all the given parameters first
function add(bisey, ...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

//add(20,30)
//add(20,30,40)

//spread
let numbers = [20, 30, 5001, 1, 2, 3, 4, 5]
//console.log(Math.max(...numbers))

//destructuring
let [nouvelleAquitane, occitanie, bretagne, [nouvelleAquitaneCities]] = [
    { name: "Nouvelle Aquitane", population: "10M" },
    { name: "Occitanie", population: "8M" },
    { name: "Bretagne", population: "10M" },
    [
        ["Bordeaux", "Biarritz"],
        ["Toulouse", "Perpignan"],
        ["Rennes", "Brest"]
    ]
]

//console.log(nouvelleAquitane.population)
//console.log(occitanie)
//console.log(nouvelleAquitaneCities)

//let {productName:appleName,unitPrice:applePrice,quantity:appleQuantity} = {productName:"Elma", unitPrice:10, quantity:5}

let appleName, applePrice, appleQuantity
({ productName: appleName, unitPrice: applePrice, quantity: appleQuantity } = { productName: "Elma", unitPrice: 10, quantity: 5 })

//console.log(appleName);
//console.log(applePrice);
//console.log(appleQuantity);











