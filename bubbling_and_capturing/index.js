// false -> bubbling , true -> capturing

// true by default



document.querySelector("#grandparent").addEventListener("click", (e) => {
    console.log("grand parent called")
}, true) 


document.querySelector("#parent").addEventListener("click", (e) => {
    console.log("parent called")
}, true) 

document.querySelector("#child").addEventListener("click", (e) => {
    console.log("child called")
}, true) 