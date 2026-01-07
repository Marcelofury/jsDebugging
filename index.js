let username = 'Butera Marcel';

let instructor = 'Gorret';

let course = 'Javascript Debugging';

console.log(`Hello ${username}, welcome to the ${course} course with ${instructor} as your instructor!`);
//console.error('This is an error message for debugging purposes.');
let age = 25;

if (age >= 18) {   
    console.error('You are old enough to vote!');
}
else {
    console.error('You are not old enough to vote yet.');
}



//console.table({username, intructor, course, age});    
console.table({username, instructor, course, age});

//another example of debugging eith console.table with arrays
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
console.table(fruits);

//another example of debugging eith console.table with arrays of objects
let students = [
    {name: 'Alice', age: 20},
    {name: 'Bob', age: 22}, 
    {name: 'Charlie', age: 23}
];
console.table(students);

// debugging with other console methods one by one with examples
console.warn('This is a warning message for debugging purposes.');
console.info('This is an informational message for debugging purposes.');