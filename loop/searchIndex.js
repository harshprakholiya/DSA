// Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

// searchIndex(arr, "apple") => 0 
// searchIndex(arr, "mango") => 2 
// searchIndex(arr, "tomato") => -1 

const fruits = ["apple", "banana", "mango", "strawberry", "greps"];

const searchIndex = (arr, name) => {
    for(let i=0; i<=arr.length; i++){
        if(arr[i] === name){
            return i;
        }
    }
    return -1;
}

console.log(searchIndex(fruits, "apple"));
console.log(searchIndex(fruits, "mango"));
console.log(searchIndex(fruits, "tomato"));
