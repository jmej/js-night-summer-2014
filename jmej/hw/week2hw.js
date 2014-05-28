/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
//reading notes - stopped reading chapter 4 at ex 4.5 may27 - that much took 45 mins

// 1) simulating arrays  --- part one took me about 2 hours
var myArray = {length:0};

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

//tests

//myArray.length=0;
myArray.push('c');
myArray.push('b');
myArray.push('a');
myArray.pop();
console.log(myArray.join('a'));

//returns "cab"

console.log(myArray.join(myArray.push(myArray.push('a'))));

//returns "aaa"

//Object Comparison -- 3 hours

// a)
var thing = {a:0, b:1, c:2};
var objB = {};

var copy = function(obj){
for(var n in obj)
    objB[n] = obj[n];
}

var equal = function(objA, objB){
    for(var n in objA)
        if (objA[n] !== objB[n]){
            return false;
        }
    return true;
}

var similar = function(objA, objB){
    for(var n in objA)
       if (n in objB == false){
            return false;
        }
        for(var n in objB)
       if (n in objA == false){
            return false;
        }
    return true;
}
// b)

var union = function(objA, objB){
    var objC = {};
    for(var n in objA)
        if (n in objB == false){
            objC[n] = objA[n];
        }
    else{objC[n] = ((objA[n]) || (objB[n]));
        }
        for(var n in objB)
        if (n in objA == false){
            objC[n] = objB[n];
        }
    return objC;
}

var intersect = function(objA, objB){
    var objC = {};
    for(var n in objA)
        if (n in objB == true){
            objC[n] = (objA[n]) && (objB[n]); //this works but I'm confused about &&. shouldn't it reject values that aren't present on both sides?
        }
    return objC
}

var minus = function(objA, objB){
    var objC = {};
    for(var n in objA)
        if (n in objB != true){
            objC[n] = objA[n];
        }
    return objC
}

// c) assertions

function assert(claim,warning) {
    if (!claim) console.log(warning);
}


