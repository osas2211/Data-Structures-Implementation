from operator import le


class Hashmap:
    def __init__(self, size):
        self.data = list()
        self.size = size
    
    def hash(self, key = "key"):
        return len(key) % self.size

hash = Hashmap(50)

print(hash.hash("helsso"))