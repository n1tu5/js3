console.log(`Задача 1`)
let user = {
    name: "John",
    age: 30
};
console.log(`age` in user);

console.log(`Задача 2`)
let users= [{
    name: "John",
    age: 30
},
{
    name: "Anna",
    age: 19
},
{
    name: "Bob",
    age: 21
}];
let find = users.find((string) => string.name === "Bob");
console.log(find)

console.log(`Задача 3`)
let find1 = users.findIndex((string) => string.name === "Anna");
delete users[find1]
console.log(users)


console.log(`Задача 4`)
console.log(users.sort((a, b) => a.age - b.age));

console.log(`Задача 5`)
const obj = {
    id: 5,
   token: 12343423
    };
const id = obj['id']
console.log(id);

console.log(`Задача 6`)
const obj1 = {
    id: 5,
   token: 12343423
    };
    const userid = obj1.id
    console.log(userid);
    
