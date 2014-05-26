/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

function assert(claim,warning) {
    if (!claim) console.log(warning);
}

function isPositiveInt(n) {
    if (typeof n !== 'number') return false;
    if (n <= 0 ) return false;
    if (n%1 !== 0 ) return false;
}

function hug(who,howmany) {
    assert(typeof who === 'string', "Freak out: who isnt a string");
    //if (typof who !=='string') return undefined;
    assert(!isPositiveInt(howmany), "Freak out: howmany isnt an int: "+howmany);
    for (var needHugs = howmany; needHugs; needHugs--){
        who = '('+who+')'
    }
       return who;
}

hug("elmo",8)

//OBJECTS

var duck ={};
//var duck = new Object();  <-- same thing
duck.noise = 'quack';
duck.feet = 2;
duck.canSwim = true;
duck

var jmej = {noise:'diverse', feet:2, canSwim:true, species:'human', pet:{species:'cat', feet:(jmej.feet * 2), canSwim:false}};
jmej
jmej.feet
jmej.pet.feet
feet in jmej.pet //returns true

var ducks = {duck1:{noise:'quack'}, duck2:{noise:'jsoeigj'}}
for (var propname in ducks){
    console.log(ducks[propname].noise);
}

