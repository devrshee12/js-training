
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



// program to take sum of elements

// note : forEach wont return something


let sum = 0
arr.forEach((el, index) => {
    sum += el;
})

console.log(sum);
// console.log(t)




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



