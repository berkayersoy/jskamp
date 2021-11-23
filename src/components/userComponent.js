import { BaseLogger, ElasticLogger, MongoLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

//console.log("User component loaded.")

let logger1 = new BaseLogger()
let userService = new UserService(logger1)

let userBerkay = new User(1, "Berkay", "Ersoy", "Bordeaux")
let userJulie = new User(2, "Julie", "Herriou", "Oloron")

//userService.add(userBerkay)
//userService.add(userJulie)

//console.log(userService.list())

//console.log(userService.getById(2))

//
console.log("------------")
userService.load()

//adding a customer by hand
let customerToAdd = new Customer("qwewq", "Seda", "Yilmaz", "Ankara", "qweqweqQWeQWEw")
customerToAdd.type = "customer"
userService.add(customerToAdd)

console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())
