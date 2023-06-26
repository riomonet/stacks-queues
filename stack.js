class Stacker {

    constructor() {
	this.arr = [];
    }

    push(data) { this.arr.push(data); }

    pop() { return this.arr.pop(); }

    peek() { return this.arr[this.arr.length-1] }

    isEmpty() {	return (this.arr.length == 0)	}
}

module.exports ={ Stacker }


