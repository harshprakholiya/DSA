// Given an integer x, return true if x is a palindrome, and false otherwise

let number = 121;


function isPalindrome(n) {

    let tempNumber = n
    if(n<0)return false;
    let reverseNumber = 0;
    let rem = 0;

    while(tempNumber>0){
        rem = tempNumber%10;
        reverseNumber = (10*reverseNumber) + rem;
        tempNumber = Math.trunc(tempNumber/10);
    }

return reverseNumber === n;
}

console.log(isPalindrome(number));


