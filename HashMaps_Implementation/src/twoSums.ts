type twoSumsFunction = (nums: number[], target: number)=>{}

const twoSums: twoSumsFunction = (nums: number[], target: number):number[] =>{
    
    const hashMap: any = {}
    for(let i: number = 0; i<nums.length; i++){
        if (hashMap[target - nums[i]] !== undefined){
            return [hashMap[target - nums[i]], i]
        }

        else{
            hashMap[nums[i]] = i
        }
    }
    return []
}

console.log(twoSums([1,4,5,2], 4));