"use strict";
class HashMap {
    constructor(size) {
        this.size = size;
        this.data = new Array(this.size);
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }
    set(key, value) {
        const address = this._hash(key);
        if (this.data[address] !== undefined) {
            this.data[address] = [...this.data[address], [key, value]];
        }
        else {
            this.data[address] = [[key, value]];
        }
        return this.data;
    }
    get(key) {
        const address = this._hash(key);
        const bucket = this.data[address];
        for (let i = 0; i < bucket.length; i++) {
            if (key === bucket[i][0]) {
                return bucket[i][1];
            }
        }
        return undefined;
    }
    keys() {
        let keys = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] !== undefined) {
                for (let j = 0; j < this.data[i].length; j++) {
                    keys = [...keys, this.data[i][j][0]];
                }
            }
        }
        return keys;
    }
}
const hashmap = new HashMap(50);
const set1 = hashmap.set("key1", { hello: 1 });
const set2 = hashmap.set("key", "Hello Frank");
console.log(hashmap.keys());
