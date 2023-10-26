
/*
  1. object properties reassign
  2. object entries delete
  3. object in keyword
  4. question resolving
*/

// for lecture
/*
  - everything about Array

  - everything about Date contractor

  - what is function
  - what is parameters in function
  - what is return keyword in function
  - how to call a function
  - how to give arguments to a function

  - everything about switch statement

  - while loop
  - do while loop
  - for of loop

  - what is scop
  - what scop lookup
  - what is hoisting (logic behind it)
  - hoisting things
  - difference in var let const

  - what is DOM
  - get elements from DOM 
  - add elements in DOM 
  - remove elements from DOM 
  - what is eventlistener 
  - add or remove classes for DOM elements 

  // ! mandatory
  - what is object
  - object syntax
  - object key
  - object values
  - object entries
  - object methods
  - object methods syntax
  - object keys reassign
  - object delete entries
  - object access keys dynamically
*/

const vehicle = {
    make: 'toyota',
    model: 'corolla',
    year: 2023,
    price: 10000000,
    displayDetails: function () {
        console.log(`
        make: ${this.make}
        model: ${this.model}
        year: ${this.year}
    `);
    }
};

//! 1. object properties reassign
vehicle.year = 2010;

//! 2. object entries delete
delete vehicle.price;

//! 3. object in keyword
console.log('price' in vehicle);

vehicle.displayDetails();
console.log(vehicle);


//! question resolving
//! Q 3. Write a JavaScript program that creates a object called 'vehicle' with properties for make, model, and year. Include a method to display vehicle details.

// const vehicle = {
//   make: 'toyota',
//   model: 'corolla',
//   year: 2023,
//   displayDetails: function () {
//     return `
//         make: ${this.make}
//         model: ${this.model}
//         year: ${this.year}
//     `;
//   }
// };

// const details = vehicle.displayDetails();
// console.log(details)

//! Q4. Write a JavaScript program that creates a object called "bankAccount" with properties for account number and balance. Include methods to deposit and withdraw money from the account.

// const bankAccount = {
//   accountNumber: '327hW8t3',
//   balance: 1000,
//   deposit: function (depBalance) {
//     if ((typeof depBalance) === 'number') this.balance += depBalance;
//   },
//   withdraw: function (withBalance) {
//     this.balance -= withBalance;
//     return withBalance;
//   }
// };
// bankAccount.deposit(300);
// const withdrawalAmount = bankAccount.withdraw(200);
// console.log(bankAccount.balance)


//! Q6. Write a JavaScript program that creates a object called 'employee' with properties for name and salary. Include a method to calculate annual salary.

// const employee = {
//   name: 'ali',
//   salary: 100000,
//   calculateAnnualSalary: function () {
//     return this.salary * 12;
//   }
// };
// const annualSalary = employee.calculateAnnualSalary();
// console.log(annualSalary)

//! q7. Write a JavaScript program that creates a object `book` with properties for title, author, and publication year. Include a method to display book details.

// const book = {
//   publicationYear: 2023,
//   title: 'my sleeping story',
//   author: 'Hamza',
//   displayBookDetails: function () {
//     return `
//         publicationYear: ${this.publicationYear}
//         title: ${this.title}
//         author: ${this.author}
//     `;
//   }
// }
// const details = book.displayBookDetails();
// console.log(details)


//! Q8. Write a JavaScript program that creates a object called 'animal' with properties for species and sound. Include a method to make the animal's sound.

// const animal = {
//   species: "cat",
//   sound: "meaaaoooooo",
//   makeSound: function () {
//     return this.sound;
//   }
// }
// const sound = animal.makeSound()
// console.log(sound)




//! Q9. Write a JavaScript program that creates a object called bank with properties for bank names and branches.Include methods to add a branch, remove a branch, and display all branches.

// const bank = {
//   name: 'Bank al-habib',
//   branches: [
//     "saddar",
//     "malir",
//     "defense",
//     "lyari"
//   ],
//   addBranch: function (branch) {
//     this.branches.push(branch);
//   },
//   removeBranch: function (branch) {
//     const index = this.branches.indexOf(branch);
//     if (index !== -1) this.branches.splice(index, 1);
//   },
//   displayAllBranches: function () {
//     console.log(this.branches);
//   }
// }
// bank.removeBranch('malir')
// bank.addBranch('buffer zone')
// bank.displayAllBranches()


//! Q 10. Write a JavaScript program that creates a object called product with properties for product ID, name, and price.Include a method to calculate the total price by multiplying the price of given quantity from parameter.

// const product = {
//   id: "jk32bh32b",
//   name: "Milk Powder",
//   price: 30,
//   calculateTotalPriceOfGivenQuantity: function (quantity) {
//     if (typeof quantity === 'number') return this.price * quantity;
//   }
// };
// const price = product.calculateTotalPriceOfGivenQuantity(21);
// console.log(price);

//! Q12. Write a JavaScript program that creates a object called University with properties for university name and departments. Include methods to add a department, remove a department, and display all departments.


// const university = {
//   name: 'Karachi university',
//   departments: [
//     "IT",
//     "engineering",
//     "medical",
//     "textile"
//   ],
//   addDepartment: function (department) {
//     this.departments.push(department);
//   },
//   removeDepartment: function (department) {
//     const index = this.departments.indexOf(department);
//     console.log("index:", index);
//     if (index !== -1) this.departments.splice(index, 1);
//   },
//   displayAllDepartments: function () {
//     console.log(this.departments);
//   }
// };
// university.removeDepartment('medical');
// university.addDepartment('fashion');
// university.displayAllDepartments()

