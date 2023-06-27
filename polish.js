const {Stacker} = require ('./stack.js')
const {reverseStr} = require('./strReverse.js')


function calc (expression) {

    let s1 = new Stacker();
    let n1, n2;
    let arr = expression.split(' ').reverse()

    arr.map(token => {
	if (+token)
	    s1.push(+token)
	else{
	    n1 = s1.pop()
	    n2 = s1.pop()
	    s1.push(subtotal(token,n1,n2))
	}
    })
    return s1.pop() 
}


function subtotal (operator, op1, op2) {

    if (operator == '+')
	return op1+op2
    if (operator == '*')
	return op1*op2
    if (operator == '-')
	return op1-op2
    if (operator == '/')
	return op1/op2
}


res = calc ('+ 23 * 8 3');
console.log(res)


