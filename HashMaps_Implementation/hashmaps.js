// Hash Maps Implementaion


//Using Linear Probing to solve Collision issues.
class HashMap{
    constructor(size){
        this.size = size;
        this.keys = this.initArray(size);
        this.values = this.initArray(size);
        this.limit = 0;
        this.table = [];
        this.raw_keys = []
    }

    initArray(size){
        let array = []
        for(let i = 0; i<size; i++) array.push(null)
        return array;
    }

    hash(key){
        if (!Number.isInteger(key)) throw "Key is not of type 'Integer'"
        return key % this.size;
    }

    put(key, value){
        if (this.limit >= this.size) throw "Hash Table is Full"
        let hashedIndex = this.hash(key);
        this.raw_keys.push(key)
        //Linear Probing
        while (this.keys[hashedIndex] !== null){
            hashedIndex++
            hashedIndex = this.hash(hashedIndex)
        }

        this.keys[hashedIndex] = hashedIndex;
        this.values[hashedIndex] = value;
        this.table = [...this.table, [hashedIndex, value]]
        this.limit++
        
    }

    get(key){
        let hashedIndex = this.hash(key);
        //Linear Probing
        if (this.raw_keys.indexOf(key) == -1) return null
        return this.values[this.keys[hashedIndex]]
    }
}

const hashmap1 = new HashMap(6);
hashmap1.put(9, "Test")
hashmap1.put(2, "Test2")
hashmap1.put(3, "Test3")
hashmap1.put(1, "Test4")
hashmap1.put(4, "Test5")
hashmap1.put(7, "Test6")
console.log(hashmap1.keys);
console.log(hashmap1.values);
console.log(hashmap1.table)
console.log(hashmap1.get(5))