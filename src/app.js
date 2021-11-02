//JS is not type safe.
let sayi1=10;
sayi1="Berkay Ersoy";

//Object notation
let student = {id:1, name:"Berkay"};
//console.log(student);

//null means has a reference but not a value
function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students = ["Berkay","Julie","Oguz","Esin"]


let students2 = [student,
    {id:2, name:"Culie"},
    "Paris",
    {city:"Bordeaux"}]
//console.log(students2)

//rest together, takes the given values as an array
let showProducts = function(id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts) to see the type, we use typeof
// showProducts(10,"Elma","Armut","Karpuz")

//spread
//spread, spreads the values that are given as an array
// let points = [1,2,3,4,50,222,14,65,95,2,3,4]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC","D","E","F","G",..."HIJKLMNOPRS")

//destructuring
//to assign the values of the array to variables
let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,veryVeryHigh]] = populations
console.log(small)
console.log(veryHigh)
console.log(veryVeryHigh)

function someFunction([small1,small2],number) {
    console.log(small1,small2,number)
}

someFunction(populations,1125)

let category = {id:1, name:"Drink"}

//console.log(category.id)
//console.log(category["name"])

//how to destruct an object
let {id,name} = category
//console.log(id)
//console.log(name)










