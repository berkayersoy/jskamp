
// typescript - Type safe javascript'in uzerine gelistirilmistir. (Vue-Typescript orani daha fazla, React-Ecmascript genelde, community genelde Angular'i-Typescript ile kullaniyor)

// SPA - Single Page Application
// SPA diyince React,Angular,Vue anlamamiz gerekiyor.
// Javascript file based bir dildir.

// XML JSON tarayicilar ikisinide tanir ama gunumuzde artik JSON

//JS Type safe degildir.
let sayi1=10;
sayi1="Berkay Ersoy";

//Object notation, bu bir obje
let student = {id:1, name:"Berkay"};
//console.log(student);

//undefined boyle bir sey yok demek
//null referansi var bellekte ama degeri yok demek
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

//rest parametre konusu
//rest together, tek tek verilen parametreleri bir arraymis gibi aliyor ... koyunca
//javada params
//C# varArgs
//python **args **kwargs
let showProducts = function(id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts) turunu gormek icin typeof kullaniyoruz
// showProducts(10,"Elma","Armut","Karpuz")

//spread
//spread, array olarak verilen degerleri ayristirmaya yariyor, array icerisindeki degerleri ayristiriyor
// let points = [1,2,3,4,50,222,14,65,95,2,3,4]
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC","D","E","F","G",..."HIJKLMNOPRS")

//destructuring
// elimizdeki arrayin degerlerini degiskene atamamiza yariyor, Array'i destruct ediyoruz, parcaliyoruz
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

// objeyi destruct etme yontemi, ayni array gibi ama obje notasyonu kullaniyoruz, kategori objesinin id ve name degerlerini degiskenlere atadik, id ve name, tek tek degiskenlere atandi.
// Redux mimarisinde cokca kullanacagiz.
let {id,name} = category
//console.log(id)
//console.log(name)










