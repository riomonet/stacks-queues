class Node {

    constructor(value) {
	this.value = value;
	this.next = null;
	this.prev = null;
    }
}

class LinkedList {

    constructor() {
	this.head = null;
	this.tail = null;
	this.length = 0;
    }

    insertAfter(dest, value) {

	if (this.length == 0)
	    return this.insertFirst(value);

	let node = new Node(value);
	node.next = dest.next;

	if (dest.next != null)
	    dest.next.prev = node;

	dest.next = node;
	node.prev = dest;

	if (dest == this.tail)
	    this.tail = node;
	this.length++;
    }

    insertBefore(dest,value){

	if (this.length == 0)
	    return this.insertFirst(value);

	let node = new Node(value);

	node.prev = dest.prev;
	

	if (dest.prev != null)
	    dest.prev.next = node;

	dest.prev = node;

	node.next = dest;

	if (dest == this.head)
	    this.head = node;
	this.length++;
    }

    insertFirst(value) {
	let node = new Node(value);
	this.head = node;
	this.tail = node;
	this.length++;
    }
    
    remove(node) {
	
	if(this.length == 1)
	    return this.removeFinal();

	if(node == this.head)
	    return this.removeAtHead();

	if(node == this.tail)
	    return this.removeAtTail();

	return this.splice(node);
    }

    splice(node) {
	node.prev.next = node.next
	node.next.prev = node.prev;
	this.length--;
    }

    removeFinal() {
	this.head = null;
	this.tail = null;
	this.length--;
    }

    removeAtTail() {
	this.tail = this.tail.prev;
	this.tail.next = null;
	this.length--;
    }

    removeAtHead() {
	this.head = this.head.next
	this.head.prev = null;
	this.length--;
    }

    findNode(value) {

	let cur = this.head;
	while(cur.next != null) {
	    if (cur.value == value)
		return cur;
	    else cur = cur.next;
	}
    }
}



module.exports ={ LinkedList }







