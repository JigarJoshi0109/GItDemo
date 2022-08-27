


//callbacks


function callbacks(a,b){
    setTimeout(() => {
        console.log(a+b)
    }, 1000);
}

callbacks(3,5);


function x(y){
console.log(x);
y();
}

x(function y(){
    console.log(y);
})