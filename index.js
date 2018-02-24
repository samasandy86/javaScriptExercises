'use strict';

const abe = {
    name: 'Abe',
    age: 31,
    happy: false,
    hariColor: 'brown',
}

const brandon = {
    name: 'Brandon',
    age: 36,
    happy: true,
    hariColor: 'auburn',
}

const josh = {
    name: 'Josh',
    age: 33,
    happy: true,
    hariColor: 'red',
}

const studentArray = [abe, brandon, josh];
/* List out the entire array in one sequence /*
/* console.log(studentArray); */

for (let i = 0; i < studentArray.length; i++) {
/* List out the array but goes through and list it individually */ 
//   console.log(studentArray[i]);
 console.log(`Hello, ${studentArray[i].name}. I heard you are ${studentArray[i].age}. That sure is old! Why are you so ${studentArray[i].happy ? 'happy' : 'unhappy you old fart'}?`);

}

// if(studentArray.happy) {
//     return 'happy';
// }
//     else {
//     return  'unhappy';
// }


// const name = 'Sama';
// let happy = true;
// let age = 31;
// const hairColor = 'black';

// const feelArray = [name, happy, age, hairColor, ['kids', 'dogs', 4]];

// /* Below is an array statement */

// //if (feelArray[1] === true) {
// //   console.log(Array.isArray(feelArray), feelArray[4][0]);
// // }

// /* Below is an example fo a loop */

// for (let index = 0; index < name.length; index++) {
//     console.log(feelArray[index]);
// }
