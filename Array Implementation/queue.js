class Queue {
    constructor(){
        this.length = 0
        this.data = {}
    }
    enqueue(value){
        for(let i = this.length-1; i >= 0; i--){
            this.data[i+1] = this.data[i]
        }
        this.data[0] = value;
        this.length++
        
    }
    dequeue(){
        const value = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return value
    }
}

const queue = new Queue()
queue.enqueue("data1")
queue.enqueue("data2")
queue.enqueue("data3")
queue.enqueue("data4")
queue.enqueue("data5")
queue.enqueue("data6")
queue.dequeue()
queue.dequeue()
queue.dequeue()

console.log(queue)

