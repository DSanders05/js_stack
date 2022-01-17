/*
given an unsorted array, create a function that implement bubble sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray


https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
*/


function bubbleSort(arr){
    // check the first bubble to compare the values and if the right number is lesser then move it left
    // Once the comparison is made move to the next set of values and repeat
    //your code here
    for (let i=0; i<arr.length; i++){
        for(j=0; j<arr.length-j; j++){
            if (arr[i] > arr[i + 1] ){
                [arr[i],arr[i+1]] = [arr[i+1], arr[i]];
            }
        }
    }
    return arr
}
//look at the first bubble
//if swap needs to be made then make swap
//move to next bubble
//first iteration will put largest number last
//following iterations will need to go one less length than previous
//continue until sorted least to greatest

console.log(bubbleSort([5,2,9,7,4,1,3]))