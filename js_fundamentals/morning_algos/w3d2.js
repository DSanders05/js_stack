/*
Union Sorted Arrays
Efficiently combine two already-sorted arrays into a new sorted array containing the
multiset union. Example: given [1,2,2,2,7] and [2,2,6,6,7], return [1,2,2,2,6,6,7].
*/

//using first val from arr1 compare to values of arr2 increasing counter by 1 with each additional
//instance found

function union(arr1,arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while (i<arr1.length || j <arr2.length){
        if(arr1[i]<arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else if(arr1[i] == arr2[j]){
            result.push(arr1[i])
            i++;
            j++;
        }
        else {
            result.push(arr2[j])
        }
    }
    return result;
}

console.log(union([1,2,2,2,7],[2,2,6,6,7] )) //[1,2,2,2,6,6,7

