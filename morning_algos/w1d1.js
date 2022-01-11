/*
given an unsorted array, create a function that implement bubble sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray


https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/
*/


function bubbleSort(arr){
    // check the first bubble to compare the values and if the right number is lesser then move it left
    // Once the comparison is made move to the next set of values and repeat
    // Once 
    //your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]){
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
        }
    }
    return 
}


bubbleSort([5,7,2,9,1,4])