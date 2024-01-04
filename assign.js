// assignment 1

// obj1 = {hair:"long", beard: true}
// obj2 = {beard: false, hair: "long"};





// const arr1 = Object.entries(obj1);
// const arr2 = Object.entries(obj2);
// arr1.sort((a, b) => {
//     return a[0].localeCompare(b[0])
// })
// arr2.sort((a, b) => {
//     return a[0].localeCompare(b[0])
// })

// const compareArr = (arr1, arr2) => {
//     if(arr1.length !== arr2.length){
//         return false
//     }

//     for(let i=0;i<arr1.length;i++){
//         if(arr1[i][0] === arr2[i][0] && arr1[i][1] === arr2[i][1]){
            
//         }
//         else{
//             return false
//         }
//     }

//     return true;
// }

// console.log(compareArr(arr1, arr2));



// console.log(arr1 === arr2);



// assignment 2

// inputString = "col1,col2\na,b\nc,d\ne,f"
// inputArr = inputString.split("\n");
// console.log(inputArr);
// const finalArr = []
// for(let i = 1;i<inputArr.length;i++){
//     const keys = inputArr[0].split(",");
//     const values = inputArr[i].split(",");
//     const t = {};
//     for(let idx in keys){
//         t[keys[idx]] = values[idx];
//     }
//     finalArr.push(t);
// }
// console.log(finalArr);



// assignment 3

// const inputArr = [{col1:'a', col2:'b'}];

// let s = ""

// for(let ele of inputArr){

//     const t1 = Object.keys(ele).join(",");
//     const t2 = Object.values(ele).join(",");
//     const t = t1 + "\n" + t2;
//     s += t;
// }       

// console.log(s);


// assignment 4



const rec = (idx=0, arr=[], original=[1,2]) => {
    
    if(idx === original.length){
        console.log(arr);
        return
    }

    // we have option one either we pick the element or not 
    arr.push(original[idx])
    rec(idx + 1, arr, original)
    // if(arr.length !== 0){
    //     arr.pop();
    // }
    arr.pop();
    rec(idx + 1, arr, original)
}

arr = []
console.log(rec(0, [], [1, 2]))
// console.log(finalOutput)






// assignment 5

// const replaceNames = (obj, renameKey) => {
//     const ans = {}
//     for(let key in obj){
//         if(key in renameKey){
//             ans[renameKey[key]] = obj[key]
//         }
//         else{
//             ans[key] = obj[key];
//         }
//     }

//     return ans;
// }

// const obj1 = {name: "JJ", job: "programmer", age: 22};
// const renameKey = {name: "Firstname", job: "Role"};
// console.log(replaceNames(obj1, renameKey))







// assignment 6

// const input = [1, 2, 2, 3, 4, 4, 5];
// hash = {}

// for(let ele of input){
//     if(ele in hash){
//         hash[ele] += 1
//     }
//     else{
//         hash[ele] = 1
//     }
// }

// console.log(hash)
// const out = []
// for(let ele in hash){
//     if(hash[ele] == 1){
//         out.push(ele);
//     }
// }



// console.log(out);


// assignment 7


// regex

// const input1 = 'YeS'

// const input = input1.toLowerCase()

// console.log(input.search(/^yes|y$/))

// if(input.search(/^(yes)|(y)/) === 0){
//     console.log(true)
// }
// else if(input.search(/^(no)|(n)/) === 0){
//     console.log(false)
// }
// else{
//     console.log("nothing");
// }




// assignment 8

// function customSort(input, orderBy, orders) {
//     return input.sort((a, b) => {
//       for (let i = 0; i < orderBy.length; i++) {
//         const key = orderBy[i];
//         const order = orders[i] === 'asc' ? 1 : -1;
  
//         if (a[key] < b[key]) return -1 * order;
//         if (a[key] > b[key]) return 1 * order;
//       }
  
//       return 0; 
//     });
//   }

// input = [
//     {name:"fred", age: 48},
//     {name: "barney", age:36},
//     {name:"fred", age: 40},
//     {name: "barney", age: 40},
// ]
// orderBy = ['name', 'age']
// orders = ['asc', 'desc']


// console.log(customSort(input, orderBy, orders));





// assignment 9

// const input = {a:1, b: 2,c :3}
// const removeKey = ['b', 'c']

// for(let key of removeKey){
//     delete input[key]
// }

// console.log(input)


// assignment 10 



// const convertTime24To12 = (input) => {
//     if(input > 12){
//         return `${input - 12}pm`
//     }
//     else if(input == 0){
//         return `12am`
//     }
//     else if(input < 12){
//         return `${input}am`
//     }
//     else{
//         return `12pm`
//     }

// }


// for(let i = 0;i<24;i++){
//     console.log(convertTime24To12(i));
// }












