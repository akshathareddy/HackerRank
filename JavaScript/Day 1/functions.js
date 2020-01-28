/*
 * Create the function factorial here
 */
const factorial = (n) => {
    let fact=1;
    if(n==1)
        return fact;
    else if(n>1 && n<=10){
        for(let i=n; i>1; i--)
            fact*=i;
        return fact;
    }
    else
        document.writeln("Please chose a number between 1-10");
}

// const factorial = n => (n>1)? n*factorial(n-1):(n==1)?1:"Please chose a number between 1-10";