class HashMap{
    constructor(size){
        this.data = new Array(size)
    }

    _hash (key){
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash
    }

    set(key, value){
        // set an address to store the value
        const address = this._hash(key)

        // check  if the addressexists in this.data
        if (this.data[address]){
            //The new entry is added to the address array to tackle collision;
            this.data[address].push([key, value])
        }

        else{
            // if the hashed key / address doesn't exist in this.data
            this.data[address] = []
            this.data[address].push([key, value])
        }
        return this.data
    }

    get(key){
        const address = this._hash(key);

        // check if address exists in this.data 
        if (this.data[address]){
            // loop through this.data[address] and check if the 0th index of each entry equals the key
            for (let i = 0; i < this.data[address].length ; i++){
                if (this.data[address][i][0] === key){
                    return this.data[address][i][1]
                }
            } 
        }

        return undefined
    }
}

const dict = new HashMap(500)
dict.set("Test", 2000)
dict.set("Test", 3000)
dict.set("Testing", 12000)
console.log(dict.get("Test"))