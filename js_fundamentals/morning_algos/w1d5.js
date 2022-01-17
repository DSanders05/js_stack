/* Quick Sort -

1. First build out the partition function - this is the helper function that we will need in order to do quick sort

Partition is when you are given an unsorted array and you pick any value in that array, and rearrange that array so that value you have picked (pivot value) has everything that to the left of it is less than it and everything to the right of it is greater than it.
    -for simplicity, pick the first element in the array (at index 0) as our pivot
    -hint: count how many values are less than the pivot value
    -hint: any time you see a value that is less than the pivot, increment some counter and also swap the element at index i with the counter position.
    -Lastly, the partition function should return the index where the pivot value ended up at
    
let x = [6,8,3,2,9,0,12,1]

pivotidx = 0



2. Quick sort will implement the partition function recursively

*/


// const partition = (arr) => {
//     let pivotidx = 0;
//     for (let i = 0; i <arr.length; i++){
//         if(arr[pivotidx] > arr[i+1]){
//             pivotidx +=1;
//             [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//             console.log(arr);
//         }else if(){

//         }
//     }

// }

// partition([6,8,3,2,9,0,12,1])

let arr = [6,8,3,2,9,0,12,1];
console.log(arr);
[arr[0],arr[4]] = [arr[4],arr[0]];
console.log(arr);


