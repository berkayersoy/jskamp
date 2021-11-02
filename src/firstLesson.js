console.log("Merhaba Kodlama.io")

//JS type safe degildir, let bile olsa
let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
    //buradaki dolarDun sadece bu blokta gecerlidir
    //ama bunu var ile kullansaydik patlariz, var her yerde gecerlidir
}

console.log(dolarDun)

const euroDun = 10
//euroDun 11, const oldugu icin bunu yapamiyoruz
console.log(euroDun)

//array
//camelCasing
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

for (let i=0; i<konutKredileri.length; i++) {
    console.log(konutKredileri[i])
}