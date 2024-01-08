let counter = 0;

const getData = () => {
    // calling an API
    console.log("fetching the data...", counter++);
}   

let c = 0 ;
const onClick = () => {
    
    console.log("on click called ....", c );
}

const debounce = function(fn, delay){
    let timer; // closure
    return function(){
        let context = this;
        let args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay)
    }
}

const throttle = function(fn, limit){
    let flag = true; // closure

    return function(){
        let context = this;
        let args = arguments;
        if(flag){
            fn.apply(context, args)
            flag = false
        }
        setTimeout(() => {
            flag = true
        }, limit)
    }
}







const betterFunction = debounce(getData, 300);
const betterOnClickFunction = throttle(onClick, 10000);