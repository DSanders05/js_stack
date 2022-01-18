function strToWordArr(str){
    let result = [];
    let j = "";
    for (let i=0; i<str.length-1; i++){
        if(str[i] === " "){
            i++;
        }else if(str[i] != " "){
            while(str[i] != " "){
                j+=str[i];
                i++;
            }
            str.push(j);
            j="";
        }
    return result;
    }
}
console.log(strToWordArr("  Welcome  to week     two!"))