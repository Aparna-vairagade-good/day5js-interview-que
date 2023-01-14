// 
let a=5
let b=a;
console.log(a)
console.log(b)
b=6
console.log(a)
console.log(b)
// 
let obj={
    name:"Aparna"
}
let obj2=obj
console.log(obj)
console.log(obj2)
obj2.name="ashwini"
console.log(obj)
console.log(obj2)

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

console.log(newArr)

function myFunction(num) {
  return num * 10;
}

// 
const ages = [32, 33, 16, 40];
console.log(ages.filter(checkAdult))

function checkAdult(age) {
  return age >= 18;
}


async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
    let result = await promise; // wait until the promise resolves (*)
    alert(result); // "done!"
  }
  f();
