

const twoSums = (array = new Array, target = new Number)=>{
    const hashMap = {}
    
    for (let i = 0; i< array.length; i++){
        if (hashMap[target - array[i]] !== undefined){
            return [hashMap[target - array[i]], i]
        }

        hashMap[array[i]] = i
    }

    console.log(hashMap)
}

console.log(twoSums([2,2,3], 5))