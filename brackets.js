const {Stacker} = require ('./stack.js')

/* push all brackets onto the stack */
function isBalanced(str) {

    let s1 = new Stacker();

    let match = {
	']' : '[',
	'}' : '{',
	')' : '('
    };

    for (let c of str) {
	if (c == '('  || c == '[' || c == '{')
	    s1.push(c)
	if( c == ')' || c == ']' || c == '}') {
	    oBracket = s1.pop()
	    if (oBracket != match[c])
		return 'unbalanced'
	}
    }
    if (s1.isEmpty())
	return 'balanced';
    else
	return 'unbalanced';
}

let ans = isBalanced(process.argv[2])
console.log(ans)


/* rules:

   even number of each tupe of bracket
   every open must have a matching close
   inner bracckets must be closed before outer brackets are closed

   ((  [  )  ] )
   bad

   )
   ]
   
   [
   )
   (
   (
   ----------
   )
   ( good
   ---------------
bad
   ]
   (
   
*/










