const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const output = [];

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
    
// }

// const square = element => element * element;
// const square = x => x * x;

const result = numbers.map(x => x * x);

// const result = numbers.map(function(element){
//   return element * element;
// })

// console.log(result);

const bigger = numbers.filter(x => x > 3);

console.log(bigger);

const isThere = numbers.find(x => x > 4);
// console.log(isThere);