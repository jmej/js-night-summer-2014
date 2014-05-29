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
assert(copy((var a = {a:0}),(var b = {a:0})==={a:0},"Test copy0 failed"); //not really sure how to go about these

       
// 3) Card Deck as Methods -- took 2 hours because I hadn't done this part of HW1 prior

var cardReader = {

	rank: function(card) {
       var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
       index = Math.floor((card / 4));
       return (ranks[index]);
	},

	suit: function(card) {
        var suits = [1, 2, 3, 4];
        return (suits[(card % 4)]);
	},

	cardID: function(rank,suit) {
       var subt = [4, 3, 2, 1];
       return((rank * 4) - (subt[(suit-1)]));
	},

	color: function(card) {
       var colors = ["red", "red", "black", "black"];
       return(colors[(card % 4)]);
	},

	//someExtraProperty: whatever...
	name: function(card) {
       var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
       var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
       var rank = ranks[(this.rank(card)-1)];
       var suit = suits[(this.suit(card)-1)];
       return (rank + " of " + suit);
	},

	precedes: function(cardA,cardB) {
       var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
       var A = ranks[(Math.floor((cardA / 4)))];
       var B = ranks[(Math.floor((cardB / 4)))];
       if (A === (B-1)){
          return (true);
       }else if ((A === 13) && (B === 1)){
          return(true);
         }
        return(false);        
	},

	sameColor: function(cardA,cardB) {
        return(this.color(cardA)===this.color(cardB));
	},

	nextInSuit: function(cardA) {
    if (cardA<48){
       return(cardA+4);
    }else{
       return(cardA-48);
       }
	},

	prevInSuit: function(cardB) {
    if (cardB>3){
       return(cardB-4);
    }else{
        return(cardB+48);
         }
	}
};


// TESTING:
var alias = cardReader;//change as needed

function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(alias.rank(0)===1,"Test 1 failed");
assert(alias.rank(3)===1,"Test 2 failed");
assert(alias.rank(51)===13,"Test 3 failed");
assert(alias.suit(0)===1,"Test 4 failed");
assert(alias.suit(5)===2,"Test 5 failed");
assert(alias.suit(51)===4,"Test 6 failed");
assert(alias.cardID(1,1)===0,"Test 7 failed");
assert(alias.cardID(13,4)===51,"Test 8 failed");
assert(alias.cardID(8,3)===30,"Test 9 failed");
assert(alias.color(0)==='red',"Test 10 failed");
assert(alias.color(2)==='black',"Test 11 failed");
assert(alias.name(5)==='Two of Diamonds',"Test 12 failed");
assert(alias.name(51)==='King of Clubs',"Test 13 failed");
assert(!alias.precedes(0,1),"Test 14 failed");
assert(alias.precedes(0,5),"Test 15 failed");
assert(alias.precedes(51,0),"Test 16 failed");
assert(alias.precedes(50,2),"Test 17 failed");
assert(alias.sameColor(0,1),"Test 18 failed");
assert(!alias.sameColor(1,2),"Test 19 failed");
assert(alias.nextInSuit(0)===4,"Test 20 failed");
assert(alias.nextInSuit(51)===3,"Test 21 failed");
assert(alias.nextInSuit(48)===0,"Test 22 failed");
assert(alias.prevInSuit(0)===48,"Test 23 failed");
assert(alias.prevInSuit(3)===51,"Test 24 failed");
assert(alias.prevInSuit(5)===1,"Test 25 failed");

// 4) social network


var people = {};

people.index = {};

people.meet = function(nameA,nameB) {
        if ((people.index[nameA]==undefined)&&(people.index[nameB]==undefined)){
        people.index[nameA] = {name : nameA, friends: {}};
        people.index[nameA].friends[nameB] = 1;
        people.index[nameB] = {name : nameB, friends: {}};
        people.index[nameB].friends[nameA] = 1;
    }
        else if (people.index[nameB]==undefined){
        people.index[nameB] = {name : nameB, friends: {}};
        people.index[nameB].friends[nameA] = 1;
        people.index[nameA].friends[nameB] = 1;
    }
        else if (people.index[nameA]==undefined){
        people.index[nameA] = {name : nameA, friends: {}};
        people.index[nameA].friends[nameB] = 1;
        people.index[nameB].friends[nameA] = 1;
    }
        else{
        var met = (people.index[nameA].friends[nameB]) + 1;
        people.index[nameA].friends[nameB] = met;
        people.index[nameB].friends[nameA] = met;
        console.log(nameA+ " and " +nameB+ " met again");
    }

}

people.haveMet = function(nameA,nameB) {
    if ((people.index[nameA] != undefined) && (people.index[nameA].friends[nameB] != undefined)){
        return people.index[nameA].friends[nameB];
    }
    else return 0;
}


people.friendsOf = function(name) {
	if (people.index[name] == undefined){
        return undefined;
    }
    else{
        var f = [];
        for (var p in people.index[name].friends){
        f.push(p);    
        }
        f.sort();
        var o = "";
        for (var i=0; i<(f.length-1); i++){
               o = o + f[i] + ", ";
        }
        o = o + f[f.length-1];
        return(o);
    }
}



