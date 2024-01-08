// Problem Statement:
// You are tasked with implementing a simple counter system using closures. The counter should have the following functionality:

// Initialize a counter with an initial value.
// Increment the counter by a specified amount.
// Decrement the counter by a specified amount.
// Retrieve the current value of the counter.
// Implement a function createCounter(initialValue) that returns an object with the above functionalities.




function createCounter(initValue){
    let counterValue = initValue; 

    const counter = {
        increament: function(value = 1){
            counterValue += value
        },
        decrement: function(value = 1){
            counterValue -= value
        },
        getCounterValue: function(){
            return counterValue
        }
    }

    return counter;
}

const counter = createCounter(10);
console.log(counter.increament(3));
console.log(counter.getCounterValue());
console.log(counter.decrement(4));
console.log(counter.getCounterValue());
