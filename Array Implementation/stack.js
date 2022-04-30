class Stack{
    constructor(){
        this.length = 0;
        this.data = {}
    }
    
    push(value){
        this.data[this.length] = value
        this.length++
        return value
    }

    pop(){
        const value = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return value
    }

}


const stack = new Stack()
stack.push("test")
stack.push("age")
stack.push("for")
stack.pop()
stack.pop()
console.log(stack.pop());