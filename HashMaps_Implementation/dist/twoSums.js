"use strict";
const twoSums = (nums, target) => {
    const hashMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (hashMap[target - nums[i]] !== undefined) {
            return [hashMap[target - nums[i]], i];
        }
        else {
            hashMap[nums[i]] = i;
        }
    }
    return [];
};
console.log(twoSums([1, 4, 5, 2], 4));
