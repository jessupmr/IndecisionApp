// arguments object - no longer bound with arrow functions

// const add = function(a, b) {
//     console.log(arguments);
//     return a + b;
// }

// const add = (a, b) => {
//     //console.log(arguments);
//     return a + b;
// }
// console.log(add(14, 5, 7));


// // this keyword - no longer bound with arrow functions
// const user = {
//     name: 'Mike',
//     cities: ['Wenatchee', 'Nashville', 'Marquett', 'Suwon'],
//     printPlacesLived() {
//         return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
        
//         // this.cities.forEach((city) => {
//         //     console.log(this.name + ' has lived in ' + city);
//         // });
//     }
// };
// console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());