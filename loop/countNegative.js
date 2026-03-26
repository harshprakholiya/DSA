// write a function that returns the number of negative numbers in an array

// countNegative(arr) => 3
// countNegative(arr) => 0  

const numbers = [1, 2, 5, -1, 45, -10, -56];

const countNegative = (arr) => {
    let count = 0;
    for (let i=0; i<=arr.length; i++){
        if(arr[i]<0)
        {
            count = count + 1;
        }
    }
    return count;
}
console.log(countNegative(numbers))