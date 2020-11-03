const student = [
    {id: 21, name: "shaker"},
    {id: 22, name: "tarek"},
    {id: 23, name: "atik"},
];

// const output = [];
// for (let i = 0; i < student.length; i++) {
//     const element = student[i].name;

//     output.push(element);
// }

// console.log(output);

const name = student.map(x => x.name);
console.log(name);

