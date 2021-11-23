import { users } from "../data/users.js"
import DataError from "../models/dataError.js"

export default class UserService {
    constructor(loggerService) {
        this.employees = []
        this.customers = []
        this.errors = []
        this.loggerService = loggerService
    }

    load() {
        for (const user of users) {
            //bc JS is not type safe we checked the type of the User with a switch case and added them to their corresponding arrays
            switch (user.type) {
                case "customer":
                    if (!this.checkCustomerValidityForErrors(user)) {
                        this.customers.push(user)
                    }
                    break;
                case "employee":
                    if (!this.checkEmployeeValidityForErrors(user)) {
                        this.employees.push(user)
                    }
                    break;
                default:
                    this.errors.push(new DataError("Wrong user type", user))
                    break;
            }

        }
    }

    checkCustomerValidityForErrors(user) {
        // how to check if the object has these properties
        //splits the values in an array
        let requiredFields = "id firstName lastName age city".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            //checks if the user has all the fields that are in the requiredFields array. (if not user[field] push an error)
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem on ${field} is required`, user))
            }
            //isNaN checks if the value is NotANumber
            //to check if the property is a number, parseInt tries to parse the value to Integer (strings cannot be), and + can never be parsed into an integer, used the + to get rid of values like '21a' being able to be parsed into Int
            if (Number.isNaN(Number.parseInt(+user.age))) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem on ${user.age} is not a number`, user))
            }
        }
        return hasErrors;
    }

    checkEmployeeValidityForErrors(user) {
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!user[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation problem on ${field} is required`, user))
            }
        }
        if (Number.isNaN(Number.parseInt(+user.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation problem on ${user.age} is not a number`, user))
        }

        return hasErrors;
    }

    add(user) {
        switch (user.type) {
            case "customer":
                if (!this.checkCustomerValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            case "employee":
                if (!this.checkEmployeeValidityForErrors(user)) {
                    this.customers.push(user)
                }
                break;
            default:
                this.errors.push(new DataError("This user can not be added. Wrong user type", user))
                break;
        }
        this.loggerService.log(user)
    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u => u.id === id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1;
            } else if (customer1.firstName === customer2.firstName) {
                return 0;
            } else {
                return -1
            }
        })
    }

}