let  number = -567;

function reverseInteger(n){
    let reverseNumber = 0;
    let rem = 0;

    while(n!=0){
        rem = n%10;
        reverseNumber = (10*reverseNumber)+rem;
        n = Math.trunc(n/10);
    }
    return reverseNumber;
}

console.log(reverseInteger(number));