const { load } = require("flat-cache");

class ListNode {
    constructor(key,value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}


class hashMap {
    constructor() {
        this.buckets = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],]
    }
    
    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode;
      } 

    set(key,value) {
        let hashCode = this.hash(key);
        let bucketIndex = hashCode % this.buckets.length;

        if(this.buckets[bucketIndex].length === null) {
            this.buckets[bucketIndex] = new ListNode(key,value);
        } else {
            let node = this.buckets[bucketIndex]
            while(node.next) {
                node = node.next;
            }
            node.next = new ListNode(key,value);
        }


        console.log(this.buckets);
    }

    loadFactorCheck() {
        let valueCount = 0;
        let loadFactor = 0.75 * this.buckets.length;

        this.buckets.forEach((bucket) => {
            if(bucket.length != 0) {
                valueCount++
            }
            return valueCount;
        });


        if(valueCount >= loadFactor) {
            this.buckets.push([],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]);
        }
    }

    remove(key) {
        let hashCode = this.hash(key);
        let bucketIndex = hashCode % this.buckets.length;
        let currentNode = this.buckets[bucketIndex];
        let prevNode = null;
    
        while (currentNode) {
            if (currentNode.key === key) {
                if (prevNode === null) {
                    this.buckets[bucketIndex] = currentNode.next;
                } else {
                    prevNode.next = currentNode.next;
                }
                return true;
            }
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        console.log(this.buckets);
        return false; 
    }

    clear() {
        this.buckets = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],];
    }

    count() {
        let valueCount = 0;
        this.buckets.forEach((bucket) => {
            let currentNode = bucket;
            while (currentNode) {
                valueCount++;
                currentNode = currentNode.next;
            }
        });
        console.log(valueCount);
    }
    



}


test = new hashMap();
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver')


test.remove("moon");
test.count();
test.remove("jacket");
test.count();