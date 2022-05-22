const firstRecurringCharacter = (array = [])=>{
    const hashMap = {}
    let value;

    for(let i=0; i<array.length; i++){
        if(hashMap[array[i]] !== undefined){
            return array[i]
        }
        hashMap[array[i]] = array[i]
    }

    return undefined

    
}

const test = [1,2,4,4,1,2,3,5]

console.log(firstRecurringCharacter(test))