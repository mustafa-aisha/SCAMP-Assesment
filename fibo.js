 //1,1,2,3,5,8,13,21,34

function fib(n) {
    if(n < 3 ){
        return 1;
    } else { 
    return fib(n-1) + fib(n-2);
    }
}

document.write(fib(8));