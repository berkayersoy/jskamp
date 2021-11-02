class Customer{
    constructor(id,customerNumber){
        //this keyword is for the instance, for ex. customer239
        //this is a prototyping attribute
        this.id = id;
        this.customerNumber = customerNumber;
    }
}

let customer239 = new Customer(239,"A123GF123")
console.log(customer239.customerNumber)

//instance prototyping
customer239.name ="Berkay Ersoy"
console.log(customer239.name)

//static prototyping, prototyping that is done to a Class
Customer.bisey = "Bisey"
console.log(Customer.bisey)

//Inheritance
class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber);
        this.firstName = firstName;
    }
}

class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber);
        this.companyName = companyName;
    }
}





//Function inside an object
let studentTest = {
    firstName: "Julie",
    lastName: "Herriou",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

console.log(studentTest.fullName())


//Object constructor
function CustomerTest(first, last, city, country, age){
    this.first = first;
    this.last = last;
    this.city = city;
    this.country = country;
    this.age = age;
}

let customerTestJulie = new CustomerTest("Julie","Herriou","Bordeaux","France",24);
console.log(customerTestJulie.first);

// let testNumber = 8;

// let increaseByOne = function() {
//     testNumber++
//     var testNumber2 = 0;
//     console.log(testNumber2)
// }

// increaseByOne()

// console.log(testNumber)








