// write a function that returns the largest number in an array

const numbers = [1, 5, 3, 39, 88, 67, 109, 66];

function findLargest(arr){
    let largest = 0;
    for(let i=0; i<=arr.length; i++){
        if(arr[i]>=largest)
        {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest(numbers))