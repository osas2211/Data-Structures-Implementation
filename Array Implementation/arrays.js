class MyArray{
    constructor(){
        this.length = 0;
        this.data = {}
    }

    get(index){
        return this.data[index]
    }

    push(value){
        this.data[this.length] = value;
        this.length++
        return this.length;
    }

    pop(){
        const lastValue = this.data[this.length -1 ]
        delete this.data[this.length -1 ]
        this.length--
        return lastValue;
    }

    delete(index){
        const item = this.data[index]
        this.shiftItems(index)
        return item;
    }

    shiftItems(index){
        for (let i = index; i < this.length-1; i++){
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length -1]
        this.length--
    }

    insert(value, index){
        // The next value after the index is held by this nextValue constant.
        const nextValue = this.data[index]

        // using a for loop to increase the indexes of all values after the index to be inserted.
        for (let i = this.length - 1; i > index ; i--){
            // each value is set to the index after it.
            this.data[i+1] = this.data[i]
        }
        // inserting the value to it's stated index.
        this.data[index] = value

        // 
        index < this.length-1 ? this.data[index+1] = nextValue : this.data[index]
        this.length++
        
    }
}

const arr = new MyArray();
arr.push(1)
arr.push(18)
arr.push(122)
arr.push(145)
arr.push(100)
console.log(arr)
// arr.delete(4)
// arr.delete(0)
arr.insert(99, 5)
console.log(arr)