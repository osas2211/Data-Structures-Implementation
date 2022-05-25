
const firstRecurringCharacter = (nums: number[]): number | undefined=>{

    const hashMap: any = {}

    for(let i: number = 0; i<nums.length; i++){
        if (hashMap[nums[i]] !== undefined){
            return nums[i]
        }

        else{
            hashMap[nums[i]] = nums[i]
        }
    }
    return undefined
}

console.log(firstRecurringCharacter([1,2,1,3,4,4,5]))