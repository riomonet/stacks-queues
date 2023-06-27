const {LinkedList} = require ('./linkedlist.js')

function findSurvivor (numNodes, cycle) {

    l1 = new LinkedList();

    l1.insertFirst(1);
    for (let i = 2; i < numNodes + 1 ; i++)
	l1.insertAfter(l1.tail, i)

    l1.tail.next = l1.head
    l1.head.prev = l1.tail

    printList(l1)
    let cur = l1.tail;

    while (l1.length >= 2) {
	cur = advance(cur, cycle)
	if (cur == l1.head)
	    removeHead(l1)
	else if (cur == l1.tail)
	    removeTail(l1)
	else
	    l1.remove(cur)
	printList(l1)
    }

    return l1.head.value;
}

function removeHead(list) {
    list.head = list.head.next;
    list.head.prev = list.tail
    list.tail.next = list.head;
    l1.length--;
}

function removeTail(list) {
    list.tail = list.tail.prev;
    list.tail.next = list.head;
    list.head.prev = list.tail;
    l1.length--;
}

function advance(node, len) {
    for (let i = 0; i < len; i++)
	node  = node.next;
    return node
}
function printList(list) {
    let arr = [];
    let cur = list.head;
    while(cur != list.tail){
	arr.push(cur.value)
	cur = cur.next
    }
    arr.push(cur.value)
    console.log(arr)
}

let survivor = findSurvivor(10,3);
console.log(survivor)



