function minimumBribes(q) {
    // Write your code here
    let sortedQ = [...q].sort();
    let person;
    let holdIndex;
    let bribes = []
    let count = 0;
    let holdDifference = 0;
    while (count <= q.length){     
          
        if (q[count] > q[count+1] || q[count] > q[count+2]){
            person = q[count]
            holdIndex = count
            holdDifference = holdDifference + (sortedQ.indexOf(person) - holdIndex)
            bribes.push(holdDifference)
        }
        count++
    }
    
    let difference = sortedQ.indexOf(person) - holdIndex
    console.log(holdDifference)
    if (holdDifference < q.length-1){
        return holdDifference
    }
    else if (holdDifference == q.length-1){
        return "Too chaotic"
    }
    
}

console.log(minimumBribes([2, 5, 1, 3, 4]));