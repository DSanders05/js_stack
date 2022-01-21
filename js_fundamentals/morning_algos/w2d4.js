function strEncode(str){
let counter = 1;

    for (i=0; i< str.length; i++){
        for (j=0; i<str.length; i++){
            console.log(str[j])
        }
    }
}



console.log(strEncode("aaaabcccddddd")) //a4b1c3d5
console.log(strEncode("abcccddeeeee")) //a1b1c3d2e5