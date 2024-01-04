
// let and const 


// mostly "const" should be used in your program if it will be reassigned or updated should use "let" 



// when we are creating array or object we should use "const"

// mostly "const" keyword will be used in JS

const a10 = [1, 2, 3, 4, 5];
const obj10 = {a1: 10, a2: 20}

let t10 = 10;
t10 = 12
t10 += 12;

// map and forEach



// program to return an array with squared of all the elements using map

// note : map will always returns an array with returned value if we dont return something it will return undefined 

const arr = [1, 2, 3, 4, 5]

const squared = arr.map((el, index) => {
    return el*2;
})

console.log(squared);


// forEach


// custom greeting for user

// note : forEach wont return something


const users = [
    { name: "Alice" },
    { name: "Bob" },
    { name: "Charlie" },
    { name: "David" },
  ];
  
users.forEach((user) => console.log(`hello and welcome ${user.name}!`));




// arrow functions 



const demo = (a, b, c=1) => { // arrow function with default parameters 
    return a + b + c
}


console.log(demo(3, 4, 5));
console.log(demo(4, 5));


// destructring

const o = {a1:11, a2:12, a3:13};
const a = [1, 2, 3, 4, 5, 6, 7];


// array destructring
const [t1, t2, t3] = a;
console.log(t1, t2, t3);


// object destructring 

const {a1, a2, a3} = o;
console.log(a1, a2, a3);



// rest operator 


const calculateSum = (...allEle) => {

    const s = allEle.reduce((acc, curr) => {
        return acc + curr;
    })

    return s;

}


console.log("sum is : ", calculateSum(1, 2, 4, 5, 6));






// spread operator 

const newO = {...o, s4: 14};
console.log(newO);



// ternary operator 


const age = 20;
const message = age >= 18 ? "Adult" : "Minor";
console.log(message);




// console.log("hey there ");


// setTimeout and setInterval


setTimeout(() => { 
    console.log("test message for set timeout")
}, 2000);


// setInterval(() => {
//     console.log("test message for set interval");
// }, 1000)



// callbacks


const fetchData = (cb) => {
    setTimeout(() => {
        cb();
    }, 2000)
}

const doThis = () => {
    for(let i=0;i<=10;i++){
        console.log(i);
    }
}


fetchData(doThis);



// promise and async/await 


const testPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const s = true
            if(s){
                resolve("Resolved");
            }
            else{
                reject("Rejected");
            }
        }, 2000);
    })
}



const exePromise = async() => {
    try{
        const res = await testPromise();
        console.log(res);
    }
    catch(err){
        console.log(err);
    }   
}


exePromise();




// destructring problem 


// You are working on a task management application. In your application, each task is represented as an object with various properties. You need to create functions that operate on task objects and utilize destructuring to extract specific properties.
// Function 1: Display Task Information
// Write a function displayTaskInfo that takes a task object as a parameter and logs the task's title and status to the console. Use destructuring to extract the title and status properties.
// Function 2: Update Task Status
// Write a function updateTaskStatus that takes a task object and a new status as parameters. The function should return a new task object with the updated status. Use destructuring and object shorthand notation to create the new object.




const task = {
    id: 1,
    title: "Complete project proposal",
    description: "Write and submit the project proposal by Friday.",
    status: "In Progress",
    priority: "High",
};

const displayTaskInfo = (task) => {
    const {title, status} = task
    return `title is ${title} and status is ${status}`
}

const updateTaskStatus = (task, status) => {
    return {...task, status: status}
}

console.log(displayTaskInfo(task))

console.log(updateTaskStatus(task, "Approved"))



// Function: Calculate Total Price
// Write a function calculateTotalPrice that takes the base price and any number of discount values as arguments. The function should apply the discounts to the base price and return the final total.
// The base price is a required parameter.
// Discounts are optional and can be provided as additional arguments.
// If no discounts are provided, the function should return the base price without any discount.
// If discounts are provided, the function should apply each discount sequentially to the base price.



const calculateTotalPrice = (basePrice, ...discounts) => {
    // let finalPrice = basePrice;
    const fPrice = discounts.reduce((acc, curr) => {
        return acc - ((curr/acc)*100)
    }, basePrice)
    return fPrice;

    // for(let discount of discounts){
    //     // console.log("discount : ", discount);
    //     finalPrice -= ((discount/finalPrice)*100);
    //     // console.log("final price is : ", finalPrice)
    // }
    // return finalPrice
}

console.log(calculateTotalPrice(100, 10, 20, 30));
