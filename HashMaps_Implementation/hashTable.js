class HashTable{
    constructor(size){
        this.data = new Array(size)
    }

    _hash(key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }

        return hash
    }

    set(key, value){
        const address = this._hash(key);
        if (!this.data[address]){
            this.data[address] = []
            this.data[address].push([key, value])
        }
        else this.data[address].push([key, value])
        return this.data
    }

    get(key){
        const address = this._hash(key);
        const currentBucket = this.data[address]
        let i;
        if (currentBucket){
            for (i=0; i<currentBucket.length; i++){
                if (currentBucket[i][0] === key){
                    return currentBucket[i][1]
                }
            }
        }

        return undefined
        
    }

    keys(){
        let keys = [];
        this.data.forEach(bucket => {
            if(bucket){
                bucket.forEach(pair => {
                    keys = [...keys, pair[0]]
                })
            }

        })

        return keys
    }
}

const dict = new HashTable(1)
dict.set("grapes", 100046)
dict.set("grape", 10000)
dict.set("grap", 10009)
dict.set("gra", 100044)
// console.log(dict.set("grape", 1000));
// console.log(dict.get("grape"))
console.log(dict.set("grass"))
console.log(dict.keys())


