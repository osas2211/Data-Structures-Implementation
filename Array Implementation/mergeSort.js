const mergeSort = (arr1, arr2)=> {
    const newArray = [...arr1, ...arr2]
    return newArray.sort()
}

const mergeSort2 = (arr1, arr2) => {
    const newArray = []
    let arr1Item = arr1[0]
    let arr2Item = arr2[0]
    let i = 1;
    let j = 1;

    while (arr1Item || arr2Item){
        if ( arr1Item < arr2Item){
            newArray.push(arr1Item)
            arr1Item = arr1[i]
            i++
        }
        else {
            newArray.push(arr2Item)
            arr2Item = arr2[j]
            j++
        }
        if (!arr2Item){
            break
        }
    }

    return [...newArray]
}

console.log(mergeSort2([1, 5, 59, 88].sort(), [3,0,5,8,87,98,88].sort()));
