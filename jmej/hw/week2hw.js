/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

var myArray = {0:0, 1:1, 2:2,length:3};

myArray.pop = function() {
	last = (this["length"])-1;
    val = this[last];
    delete this[last];
    this.length = last; //keeps the last property up to date
    return val;
}

myArray.push = function(val) {
	next = (this["length"]);
    this[next] = val
    this.length = next+1; //keeps the last property up to date
    return val;
}

myArray.join = function(val) {
    if (val == undefined){
        val = ""
    }
        
    var len = (this["length"])-1;
    var str = "";
    for (var i = 0; i <= len; i++){
        if (i == len){
        str = str+this[i];    
        }
        else{
        str = str+this[i]+val;
        }
    }
    return str;
}

