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