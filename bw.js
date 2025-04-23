//1. What is destructuring in JavaScript?
// A. Assigning values to variables from an array or object.
// B. Creating a new array.
// C. Combining objects into one.
// D. Declaring variables.

Answer: console.log("A. Assigning values to variables from an array or object.") 

//2. What is the result of the following destructuring operation?

// const [first, second] = [10, 20];
// A. first = 10, second = 20
// B. first = undefined, second = undefined
// C. first = 10, second = undefined
// D. first = 20, second = 10

Answer: console.log("A. first = 10, second = 20")

// 3.Skills and Concepts
// Use destructuring to assign the values from this object to variables.

const person2 = { name: 'John', age: 30, city: 'New York' };
// Assign name to a variable personName, age to a variable personAge, and city to a variable personCity
const { name: personName, age: personAge, city: personCity } = person2;
console.log(personName); // John
console.log(personAge); // 30
console.log(personCity); // New York

// 4.What would be the output of this code?
// const { a, b, c } = { a: 5, b: 10 }; console.log(a, b, c);
// A. 5 10 undefined
// B. undefined undefined undefined
// C. 5 10 10
// D. undefined undefined 10
 console.log("Answer: A. 5 10 undefined")

//5. Strategic Thinking
// Given the following array of objects, use destructuring to extract the name and age of each person and log them.

const people = [ { name: 'Alice', age: 25, city: 'Paris' }, { name: 'Bob', age: 30, city: 'London' }, { name: 'Charlie', age: 35, city: 'Berlin' } ];
// Use a loop or array method to log the name and age of each person.
 people.forEach(({ name, age,city }) => { console.log(`Name: ${name}, Age: ${age},City:${city}`); });

// 6. Use destructuring with a default value for the city property in the following object. If city is not present, assign it a default value of 'Unknown'.

const person = { name: 'Eve', age: 40 };
 const{name, age, city = 'Unknown'} = person;
 console.log(`Name: ${name}, Age: ${age}, City: ${city}`); // Name: Eve, Age: 40, City: Unknown
// Extended Thinking
// 7. You have the following nested object:

const employee = { id: 1234, personalInfo: { name: 'John Doe', age: 28 }, jobDetails: { position: 'Software Engineer', department: 'Development' } };
// Use destructuring to extract the name from personalInfo, the position from jobDetails, and the id from the top level.
 const { personalInfo: { name1 ,age1}, jobDetails: { position , department }, id }= employee;
 console.log(`Name: ${name1}, Position: ${position}, ID: ${id}`); // Name: John Doe, Position: Software Engineer, ID: 1234
// 8. Given this function that returns an object, use destructuring to get the title and author properties. Provide a default value for author if it is missing.

function getBookInfo() { return { title: '1984' }}; // Missing author }
const { title, author = 'Unknown' } = getBookInfo();
console.log(`Title: ${title}, Author: ${author}`); // Title: 1984, Author: Unknown