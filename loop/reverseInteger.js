let  number = -567;

function reverseInteger(n){
    let tempNumber = n;
    let reverseNumber = 0;
    let rem = 0;

    while(tempNumber!=0){
        rem = tempNumber%10;
        reverseNumber = (10*reverseNumber)+rem;
        tempNumber = Math.trunc(tempNumber/10);
    }
    return reverseNumber;
}

console.log(reverseInteger(number));