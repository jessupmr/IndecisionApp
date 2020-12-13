var nameVar = 'Mike';
var nameVar = 'Kyle';
console.log('nameVar', nameVar);

let nameLet = 'Jennifer'
nameLet = 'Bobbie';
console.log('nameLet', nameLet);

const nameConst = 'Gerry';
console.log('nameConst', nameConst);

// block scoping
var fullName = 'Angie Jessup';

if (fullName) {
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);


