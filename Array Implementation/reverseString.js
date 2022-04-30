const reverseString = (string)=>{
    const str_arr = string.split("");
    const newArray = []
    const len = str_arr.length
    for (let i = len-1; i >= 0 ; i--){
        newArray.push(str_arr[i])
    }
    return newArray.join("")
}

console.log(reverseString("alexs"));
console.log("alexs".split("").reverse().join(""));