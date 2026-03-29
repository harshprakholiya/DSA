// Find second largest number in an array


// console.log(secondLargest(numbers)); => 10

const numbers = [10, 20, 8, 9, 3, 5, 20];

const  secondLargest = (arr) => {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0; i<= arr.length; i++){
        if(arr[i]>largest)
        {
            secondLargest = largest;
            largest = arr[i];
        }
        else if(secondLargest < arr[i] && arr[i] != largest)
        {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}

console.log(secondLargest(numbers));