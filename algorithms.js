//-------------------------------------------------------ALGORITHMS-----------------------------------------------------



//FINACCI SEQUENCE

//Question 1: Given a number "n", find the first "n" elements of the fibonacci sequence:

console.time("fib1");
const fib = (n) => {
    let firstFibNum = [0, 1];
    let seq = [...firstFibNum];

    while (seq.length < n) {
        let add = firstFibNum[0] + firstFibNum[1];
        seq.push(add);
        firstFibNum.shift();
        firstFibNum.push(add);
    }

    return seq;
}
console.timeEnd("fib1"); //0.01ms 

console.log(fib(10));

//solution 2
console.time("fib2");
const fib2 = (n) => {
    let fibArr = [0, 1]; //---- O(1);
    while (fibArr.length < n) fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]) //----- O(n);

    return fibArr; //----- O(1);
}

console.timeEnd("fib2"); //0.007ms

console.log(fib2(10));


//FACTORIAL OF A NUMBER
//Question: Find the factorial of a given number "n";

const fact = (n) => {
    let result = 1; //----- O(1)
    for (let i = 1; i <= n; i++) result *= i; //----- O(n);       
    return result // ------ O(1);
}

console.log(fact(10));

//usig recursion to solve factorial
const fact2 = (n) => {
    if (n === 0) {
        return 1;
    }

    return n * fact2(n - 1);
}

console.log(fact2(10));


//PRIME NUMBERS
//Question: Given a number "n", find if the number is a prime number or not. Should return true or false;

const Prime = (n) => {
    return n < 2 ? false : (n % 2 != 0) //----- O(1);
}

console.log(Prime(12));



//POWER OF TWO
// Question: Given a positive integer "n", determine if the integer is a power of two or not: n === 2^X

const PowerOfTwo = (n) => {
    let i = 0; result = 0;
    while (result < n) {
        result = 2**i; //---------- O(n);
        i++
    }

    return result == n;
}

console.log(PowerOfTwo(64));

//using recursion to solve fibonacci sequences
const recursiveFib = (n) => {
    if (n < 2) {
        return n;
    }

    return recursiveFib(n - 1) + recursiveFib(n-2);
}

console.log(recursiveFib(10));


//SEARCH ALGORITHMS

//LINEAR SEARCH
//QUESTION: Given an array of "n" elements and a value "t", find the index of "t" in the array if found and -1 if "t" 
//is not found in the array.

const linSearch = (n, t) => {
    for (let i = 0; i < n.length; i++) {
        if (n[i] == t) {
            return i;
        } 
    }
    return -1
}

console.log(linSearch([1,2,3,4,5], 4));


//BINARY SEARCH
//QUESTION: Given an array of "n" elements and a value "t", find the index of "t" in the array if found and -1 if "t" 
//is not found in the array.

const binarySearch = (n, t) => {
    let leftIndex = 0
    let rightIndex = n.length - 1;
    while (leftIndex <= rightIndex) { //Keep calling running loop until n[middleIndex] === t or leftIndex > rightIndex
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (n[middleIndex] == t) {
            return middleIndex;
        } 
        if(n[middleIndex] > t) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return -1
}

console.log(binarySearch([1,2,3,4,5], 2));

//Using recursion to solve the binary search
const recursiveBS = (n, t) => {
    return searchArr(n, t, 0, n.length - 1);
}

const searchArr = (n, t, leftIndex, rightIndex) => { //Keep calling this function until n[middleIndex] === t or leftIndex > rightIndex
    if (leftIndex > rightIndex) {
        return -1;
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (n[middleIndex] == t) {
        return middleIndex;
    }

    if (n[middleIndex] < t) {
        return searchArr(n, t, middleIndex + 1, rightIndex);
    } else {
        return searchArr(n, t, leftIndex, middleIndex - 1);
    }
}

console.log(recursiveBS([1,2,3,4,5], 4));


//BUBBLE SORT: Sorting numbers in assending order

const bubbleSort = (arr) => {
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i + 1];
            arr[i + 1] = arr[i];
            arr[i] = temp;
            swapped = true;
        }   
    }
    } while (swapped);
    return arr
}

console.log(bubbleSort([2, -3, 1, -8, 5, 7, 4, 9]));


//INSERTION SORT 

const insertionSort = (arr) => {
    let newArr = [...arr];
    
    let swapped;
    
    do {
        let i = 0;
        swapped = false
        while (i <= arr.length - 2) {

            let nti = newArr[i + 1]
            
            let sorted = newArr[i];
            
            if (sorted < nti) {
            
                i += 1
            
            } else {
            
                newArr[i] = nti
            
                newArr[i + 1] = sorted; 
            
                i += 1
                swapped = true
            }
        }
    } while (swapped);
    return newArr;
}

console.log(insertionSort([2, -3, 1, -8, 5, 7, 4, 9]));


//QUICK SORT

const quickSort = (arr) => {
    if (arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort([2, -3, 1, -8, 5, 7, 4, 9]));



//MERGE SORT

const merge = (left, right) => {
    let result = [];
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left[0]);
            left.shift()
        } else {
            result.push(right[0]);
            right.shift();
        }
    }

    return result.concat(left).concat(right);
}

const sortArr = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }

    let half = Math.floor(arr.length / 2)
    
    let left = arr.slice(0, half);
    
    let right = arr.slice(half);
    
    return merge(sortArr(left), sortArr(right));

}

console.log(sortArr([2, -3, 1, -8, 5, 7, 4, 9]));



//CARTESIAN PRODUCT

const cartesianProduct = (arr1, arr2) => {
    let result = [];
    for (const i of arr1) for (const j of arr2) result.push([i, j]) 
//-------- O(m*n) this is because the two arrays are of different 
//size and solutio is dependent on the length of the two arrays

    return result;
}

console.log(cartesianProduct([1, 3, 4], [7, 6, 8]));


///Find the longest "n" unique substring of a string where "n" begins the string i.e "2aabbacbaa"; 

const longestSubString = (str) => {
    let n = +str[0];
    let string = str.slice(1);
    
    const generateSubStrings = (sub_str) => {
        let subStr = [];
        for (let i = 0; i < sub_str.length; i++) {
            
            subStr.push(sub_str[i]);

            for (let j = i + 1; j < sub_str.length; j++) {

                subStr.push(subStr[subStr.length - 1] + sub_str[j])
                
            }
            
        }
        return subStr
    }

    console.log(generateSubStrings(string));

    const uniqueSubstr = generateSubStrings(string).filter((str) => {
        let unique = []

        for (const element of str) {
            
            if (!unique.includes(element)) {
                
                unique.push(element)
            
            }

        }

        return unique.length === n
    }) 
    
    console.log(uniqueSubstr);

    const longestSubStr = (strArr) => {
        return strArr.reduce((acc, cur) => cur.length > acc.length ? cur : acc, strArr[0])
    }

    return `The longest ${n} unique alphabets substring is ${longestSubStr(uniqueSubstr)}`

}

console.log(longestSubString("2aabbacbaa"))



//-------------------------------------------------------DATA STRUCTURES-----------------------------------------------------

//STACK
//A stack is a collection of elements that follows the LIFO principle. That is, the LAST IN, FIRST OUT, 
//where by the last element added to a stack is the first element that can the removed from the stack.

class Stack {
    constructor() {
        this.items = [];
    }


    push(element) { //This is to add an element from the stack data
        this.items.push(element);
    }


    pop() { ///This is to remove and return the last added element from the collection.
        return this.items.pop();
    }


    peek() { ///This is to return the last element in the collection or top-most element in the stack
        return this.items[this.items.length - 1];
    }


    isEmpty() {
        return this.items.length === 0;
    }


    size() {
        return this.items.length;
    }


    print() {
        console.log(this.items.toString());
    }



}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty());

console.log(stack.peek());

console.log(stack.pop());

console.log(stack.peek());

stack.print()



//QUEUE DATA STRUCTURE
//This is a sequential collection of elements that follows the principle of Firts In, FIrst Out. 
//That is, the first element added to the queue is also the first element that is removed from the queue.

class Queue {
    constructor() {
        this.items = [];
    }


    enqueue(element) {
        this.items.push(element);
    }


    dequeue() { /////////// --------- O(n)
        return this.items.shift();
    }


    peek() {
        return this.items[0];
    }


    isEmpty(){
        return this.items.length === 0;
    }


    size() {
        return this.items.length
    }


    print() {
        return this.items.toString();
    }
}

const queue = new Queue;

console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.size());

console.log(queue.isEmpty());

console.log(queue.peek());

console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.print());


//More Optimized way of creating and using a queue: This is by using object instead of Array

class Queue2 {
    constructor() {
        this.items = {};
        this.rear = 0;
        this.front = 0;
    }

    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }


    dequeue() { /////////// --------- O(1)
        const item = this.items[this.front];
        delete(this.items[this.front]);
        this.front++
        return item;
    }


    peek() {
        return this.items[this.front];
    }


    isEmpty() {
        return this.rear - this.front === 0;
    }


    size() {
        return this.rear - this.front;
    }


    print() {
        return this.items;
    }
}


const queue2 = new Queue2;

console.log(queue2.isEmpty());

queue2.enqueue(10);
queue2.enqueue(20);
queue2.enqueue(30);

console.log(queue2.isEmpty());

console.log(queue2.peek());
console.log(queue2.dequeue());
console.log(queue2.peek());

console.log(queue2.size());
console.log(queue2.print());




////CIRCULAR QUEUE
//Here, the size of the queue is fixed and it works as if the first element is connected to the last element.
//Also referred to as the ring buffer or circular buffer and aslo follows the principle of FIFO.

class CircularQueue {
    constructor(capacity) { //capacity is the declared fixed size of the array.
        this.items = new Array(capacity);
        this.capacity = capacity;
        this.currentLength = 0;
        this.rear = -1;
        this.front = -1;
    }


    isFull() {
        return this.capacity === this.currentLength;
    }

    isEmpty() {
        return this.currentLength === 0;
    }


    enqueue(element) {
        if (this.isEmpty()) {
            this.front += 1
        }
        if (!this.isFull()) {
            this.rear = (this.rear + 1) % this.capacity;
            this.currentLength = this.currentLength + 1;
            this.items[this.rear] = element;
        } else {
            return "Queue is full";
        }
    }


    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let item = this.items[this.front];
        this.items[this.front] = null;
        this.front = (this.front + 1) % this.capacity
        this.currentLength = this.currentLength - 1;
        
        if (this.isEmpty()) {
            this.rear = -1;
            this.front = -1;
        }
        return item;
    }


    peek() {
        if (!this.isEmpty()) {
            return this.items[this.front];
        }
        return null;
    }


    print() {
        let i
        let str = "";
        for(i = this.front; i !== this.rear; i = (i+1)%this.capacity) {
            str+= this.items[i] + " ";
        }

        str+= this.items[i];
        return str;
    }

    size() {
        return this.currentLength;
    }
}

const circularQueue = new CircularQueue(5);

console.log(circularQueue.isEmpty());
console.log(circularQueue.isFull());

circularQueue.enqueue(10);
circularQueue.enqueue(20);
circularQueue.enqueue(30);
circularQueue.enqueue(40);
circularQueue.enqueue(50);

console.log(circularQueue.isEmpty());
console.log(circularQueue.isFull());

console.log(circularQueue.print());

circularQueue.dequeue();

console.log(circularQueue.print());
circularQueue.enqueue(60);
console.log(circularQueue.print());
console.log(circularQueue.size());


///LINKED LIST
//This is a linear data structure that includes a series of connected nodes. Each node consists of a data value and a 
//pointer that points to the next node.

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class List {
  constructor() {
    this.head = null;
    this.size = 0;
  }   

  isEmpty() {
    return this.size == 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) { //Add a new node to the start of the linked list
    const node = new Node(value);
    if (this.isEmpty()) {
        this.head = node;
    } else {
        node.next = this.head;
        this.head = node;
    }

    this.size++;
  }

  append(value) { //Add a new node to the end of the linked list.
    const node = new Node(value);

    if (this.isEmpty()) {
        this.head = node;
    } else {
        let prev = this.head;
        while (prev.next) {
            prev = prev.next;
        } 
        prev.next = node;
    }
    this.size++;
  }

  insert(value, index) { //To insert a node at a particular index of the list.
    if (index < 0 || index > this.size) { //checks if the index passed is invalid. That is, if it is less than 0 ir greater than size.
         return;
    }

    if (index == 0) { //ckecks if the index is equal to 0.
        this.prepend(value);
    }

    if (index > 0) { //checks if the index passed is greater than 0.
        const node = new Node(value);
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        node.next = prev.next;
        prev.next = node;
        this.size++;
    }
  }

  removeFrom(index) { //Removes the node at a particular index from the linked list.
    if (index < 0 || index >= this.size) {
        return;
    }

    let removedNode;

    if (index == 0) {
        removedNode = this.head;
        this.head = this.head.next;
    } 

    if (index > 0) {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }

        removedNode = prev.next;
        prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;

  }


  removeValue(value) { //This is to remove a node whose value is equal to the value that is being passed.
    if (this.isEmpty()) {
        return;
    }

    let removedNode;

    if (value == this.head.value) {
        this.head = this.head.next;
        this.size--
        return value;
    } else {
        let prev = this.head;
        while (prev.next && prev.next.value !== value) {
            prev = prev.next;
        }

        if (prev.next) {
            removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--
            return value;
        }
        return null;
    }

  }


  reverse() { //This is to reverse the order of the linked list.
    let prev = null;
    let curr = this.head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    this.head = prev;
  }


  search(value) { //Search for a node whose value is equal to the value that is being passed and return the index of the node, else return -1 if not found. 
    if (this.isEmpty()) {
        return -1;
    }

    if (value == this.head.value) {
        return 0;
    } else {
        let i = 0
        let curr = this.head;
        while (curr) {
            if (curr.value == value) {
                return i;
            }
            curr = curr.next;
            i++;
        }
        return -1;
    }
  }


  print() { //Get all nodes values from the list
    if (this.isEmpty()) {
        console.log("List is Empty");
    } else {
        let curr = this.head;
        let listValue = "";
        while (curr) {
            listValue += `${curr.value} `;
            curr = curr.next;
        }
        return listValue;
    }
  }
}

const myList = new List;

console.log(myList.isEmpty());
console.log(myList.getSize());

myList.prepend(10);
myList.prepend(20);
myList.prepend(30);
myList.prepend(40);
myList.prepend(50);

console.log(myList.print());
console.log(myList.getSize());

myList.append(5);

console.log(myList.print());

myList.insert(70, 2);

console.log(myList.print());

console.log(myList.removeFrom(3));

console.log(myList.print());

console.log(myList.getSize());

console.log(myList.removeValue(70));

console.log(myList.print());

console.log(myList.search(40));

myList.reverse();

console.log(myList.print());





