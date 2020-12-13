// const square = function(x) {
//     return x * x;
// }

// console.log(square(3));

// both of the following are valid

// const squareArrow = (x) => {
//     return x * x;
// }

// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));


const fullName = 'Edward Van Halen';

const getFirstName = (name) => {
    if (name) {
        return name.split(' ')[0];
    }
}

const getFirstName2 = (name) => name ? name.split(' ')[0] : '';

console.log('fullName', fullName);
console.log(getFirstName(fullName));
console.log(getFirstName2(fullName));