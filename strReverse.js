const {Stacker} = require ('./stack.js')

function reverseStr(str) {

    newstr = ""
    s1 = new Stacker
    for (let c of str)
	s1.push(c);

    while(s1.peek() != undefined)
	newstr += s1.pop();

    // console.log(newstr)
    return newstr;
}

// reverseStr('I would really like to have some fun with this stuff')

module.exports = { reverseStr }
