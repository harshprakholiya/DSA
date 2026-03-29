// Find second largest number in an array



// console.log(secondLargest(numbers)); => 88

const numbers = [1, 5, 3, 39, 88, 67, 109, 66];

const  secondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<= arr.length; i++){
        if(arr[i]>largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest(numbers));