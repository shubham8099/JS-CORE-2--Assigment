// jai Maa Saraswati :

/**
 
Q1. Create an arrow function called square that takes a number as an argument and returns its square. Use
the arrow function to calculate the square of a given number and display the result. 

const square = (num) => num * num;
      
const number = 10;
const squareNumber = square(number);
console.log("Squaring The Number",squareNumber)

**/

/*
Q2. The following is an array of 10 students ages:


=> const ages = [9,22,19,24,20,25,26,24,25,24]
* Sort the array and find the min and max ages
* Find the median age(one middle item or two middle items divided by two)
* Find the average age(all items divided by numbers of items)
* Find the Range of the ages(max minus min)
* Compare the value of (min - average) and (max - average), use abs() method



const ages = [9,22,19,24,20,25,26,24,25,24]

// Sorting the Array
ages.sort((a,b)=> a-b);

// Find the Min & Max Ages 
const minAge = ages[0];
const maxAge = ages[ages.length-1]

// Find the Median Ages Divided by 2 
let medianAge;
if (ages.length % 2 === 0){
    const mid1 = ages[Math.floor(ages.length/2)-1]
    const mid2 = ages[Math.floor(ages.length)/2]
    medianAge = (mid1 + mid2)/2
} else {
  medianAge = ages[Math.floor(ages.length/2)]
}

// Find the Average of the Age
const sumAges = ages.reduce((sum ,age)=> sum + age,0);
const averageAge = sumAges / ages.length

// Find the Range of the Ages
const rangeAges = maxAge - minAge ;

// Compare the Value (min - average ) And (max - average)
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

// print the Result ;
console.log('Sorted Ages :' , ages)
console.log('Min Age:', minAge)
console.log('Max Age:', maxAge)
console.log('Median Age:',medianAge)
console.log('Agrage Age:',averageAge)
console.log("Age Range:",rangeAges)
console.log("min-Average:",minDifference)
console.log("Max-Average:",maxDifference)

**/


/** 

Q3. Create a Map to store contact information (name, age, email, location) and implement a function to
retrieve contact details by name .


// Creating A Map :

const contactMap = new Map();

// Adding Contact to The Map :
contactMap.set("Jhon" ,{
  age : 30,
  Email : "Shubhamshah8099@gmail.com",
  Location : "Sonpur"
})
contactMap.set("Shubham",{
  Age : 19,
  Email : "sshubham@gmail.com",
  Location : "See"
})
contactMap.set("SS",{
  Age : 18,
  Email : "ss@gmail.com",
  Location : "AR"
})

// Function to Get Contact Details Based on their Name :
function getContact(name){
  return contactMap.get(name);
}

console.log(getContact("SS"))

**/

/**
Q4. Create two objects person1 and person2 with properties name and age. Create a function “introduce” that
prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself
using the introduce function.


const person1 = {name : "Shubham_shah" , age : 19}
const person2 = {name : "SS" , Age : 18 }

// Creating the Function :
function introduce(){
  console.log("Hello , I'm  ${this.name} , And I'm ${this.age} Year old")
}

// Call the Function :
introduce(person2)  

**/

/*
Q5. You are developing a program to manage a list of unique items. Write a JavaScript program that uses a
Set to store a collection of unique numbers. Use the Map object to associate each number with its square.
Finally, print both the unique numbers and their corresponding squares. 


let uniqueNumbers = new Set([3,5,7,8,9,10]);

let numberSquareMap = new Map();

uniqueNumbers.forEach(number => {
  numberSquareMap.set(number , number * number);
});

console.log(uniqueNumbers);
console.log(Array.from(uniqueNumbers).join(','))

console.log("\nNumber Square Map:");
numberSquareMap.forEach((square , number) => {
  console.log(number , square)
})

**/


/** 
Q6 
* Create a simple JavaScript function named displayInfo that takes two parameters(name and role) and
  logs a message .
* Use call to invoke the displayInfo function with specific arguments.
* Use apply to invoke the displayInfo function with arguments passed as an array 
* Create another function named greet that logs a greeting with this context
* Use bind to create a new function boundGreet with a specific context and log the greeting.


// Task 1 : Create the DisplayInfo Function;
function displayInfo(name , role){
  console.log("Name: name , Role : role")
}

// Task 2 : Use Call To Invoke displayInfo with Specific Argument ;
displayInfo.call(null , "SShubham_shah" , "Data Engineer")

// Task 3 : Use Apply to Invoke the displayInfo function with arguments passed as an array 
displayInfo.apply(null,["Shubham_shah" ,"DS"])

// Task 4 : Creating Another Function Called Greet which logs a Greeting with this Context 
function greet(){
  console.log("Hello",this.name)
}

// Task 5 : Use Bind to Create a function boundGreet and log their context 

const user = {name : "shubham"}
const boundGreet = greet.bind(user);
boundGreet();

**/

/** 
7. Task
* Create an object named calculator with methods add, subtbact, and multiply 
* Implement the calculate method in the calculator object, which takes an operation ('add', 'subtract', or
'multiply') and two numbers
* Use call to perform an addition operation using the calculate method
* Use apply to perform a multiplication operation using the calculate method with arguments as an arrays
* Create another object named discountCalculator with a discount percentage property and a method
applyDiscount
* Use bind to create a new function calculateDiscount that is bound to the discountCalculator object and
can be reused.
**/

// Task 1 : Create the Calculator Object :
const calculator = {
  add:function(a,b){
    return a+b;
  },
  substract : function (a,b){
    return a-b;
  },
  multiply : function (a,b){
    return a*b;
  },
  calculate :function(operation,a,b){
    if (operation === 'add'){
      return this.add(a,b);
    }else if (operation === 'substract'){
      return this.substract(a,b);
    }else if (operation === 'multiply'){
      return this.multiply(a,b)
    }
  }
}    

// Task 3 : use Call to perfotm the Add Function :
const additionResult = calculator.calculate.call(calculator,'add',5,3);
console.log(additionResult);

// Task 4 : Use apply for Multiplication in the Array 
const multiplicationResult = calculator.calculate.apply(calculator,['multiply' , 4,6,8])
console.log(multiplicationResult);

// Create the Discount Calculator Object :
const discountCalculator = {
  discountPercentage : 10,
  applyDiscount : function(amount){
    return amount - (amount * this.discountPercentage) / 100 ;
  }
}

// Task 6 ;
const calculateDiscount =
discountCalculator.applyDiscount.bind(discountCalculator);
const discountAmount = calculateDiscount(100);
console.log(discountAmount);