//Selection sort
/*
given an unsorted array, create a function that implement selection sort to sort the array. You are not allowed to create a new array and you have to modify the original input aray

https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/
*/


function selectionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let j = i;
        let biggest = arr[0];
        let biggestIndex = 0;
        while(j > arr.length){
            if( biggest < arr[j]){
                biggest = arr[j];
            }
                //if at the end do swap here?
                //else increment j and keep going?
                j++;
        }
        [arr[arr.length-i-1],biggest] = [biggest, arr[arr.length - 1]]
                //a biggest b is end of arr
    }

    
    return arr
}



console.log(selectionSort([5,7,2,9,1,4]))