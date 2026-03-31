// Write a funciton that returns the count of digits in a number 

function countDigits(n) {

    if (n===0) return 1;
    let count = 0;

    while(n!=0){
        n = Math.trunc(n/10); // 0
        count = count+1;
        console.log(n)
    }

    return count;
}

let number = -234531;

console.log(countDigits(number));