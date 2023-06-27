class Node {

    constructor(value) {
	this.value = value;
	this.next = null;
	this.prev = null;
    }
}

class Queue {

    constructor() {
	this.head = null;
	this.tail = null;
	this.length = 0;
    }

   enqueue (value) {

	let node = new Node;
	node.value = value;
       
       /* state 0:  length == 0 */
       if (this.length == 0) {
	    this.head = node;
	    this.tail = node;
	}

       /* state 1: length == 1 */
       else if (this.length == 1)   {
	   this.head.next = node;
	   this.tail = node;
	   node.prev = this.head;
	   
       }
       	/* state 2.length > 1 */
       else {
	   node.prev = this.tail;
	   this.tail  = node;
       }
       this.length++;
   }

    dequeue() {
	let node;
	/* state 0: lenght == 0 */
	if (this.length == 0){
	    node = null;

	} else if (this.length == 1) {	/* state 1: length == 1 */
	    node = this.head;
 	    this.tail = null;
	    this.head = null;
	    this.length--;

	} else {    /* state 2.length >= 2  */
	    node = this.head;
	    this.head = this.head.next;
	    node.next = null;
	    this.length--;
	    	    
	}
	return node;
    }
}
module.exports ={ Queue }



q = new Queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
console.log(q)	   












