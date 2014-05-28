/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
//ex. 2
function twelvedays(day) {
    var gift = [
        ' a partridge in a pear tree.',
        ' two turtle doves,',
        ' three french hens,',
        ' four calling birds,',
        ' five golden rings,',
        ' six geese a-laying,',
        ' seven swans a-swimming,',
        ' eight maids a-milking,',
        ' nine ladies dancing,',
        ' ten lords a-leaping,',
        ' eleven pipers piping,',
        ' twelve drummers drumming,'
    ];
    var days = [
        'first',
        'second',
        'third',
        'fouth',
        'fifth',
        'sixth',
        'seventh',
        'eighth',
        'ninth',
        'tenth',
        'eleventh',
        'twelfth'
    ];
    var lyrics = 'On the ' + days[day] + ' day of Christmas my true love gave to me,' + gift[day];
    for (var count = day; count > 0; count--) {
        if (count == 1){
            nextline = " and"+gift[0];
            lyrics = lyrics+nextline;
        }
        else{
        nextline = gift[(count - 1)];
        lyrics = lyrics+nextline;
        }}
    console.log(lyrics);
}
for (var counter = 0; counter < 12; counter++) {
    twelvedays(counter);
}
//ex. 3
//a

function and3(a, b, c) {
    if (a != b) {
        console.log(false);
    } 
    else if (b != c) {
        console.log(false);
    } 
    else {
        console.log(c);
    }
}
and3(1, 1, 1)
//b

function andN(n, values) {
    if (n == 0) {
        return undefined;
    } 
    else if (n == 1) {
        console.log(values[0])
        return values[0];
    } 
    else {
        for (var count = 0; count < (n-1); count++) {
            var result = (values[count] == values[(count +1)]);
            if (result == false) {
                console.log(false);
            } else {
                result = values[(n-1)];
            }
        }
        console.log(result);
    }
}
andN(4, [3, 3, 3, "3"])

//c
//none of these work because == does equivalancy but booleans do equalish
and3(5, '5', '5');
//returns '5'
5 && '5' && '5'
//returns "5"
and3(5, '5', 0)
false
5 && '5' && 0
0

//ex 4 - prime number calculator

function isPrime(n) {
    for (var count = (n-1); count > 1; count--){
        if (n % count == 0){
            console.log(n+" is not a prime number.");
            return undefined;
        }
    }
    console.log(n+" is a prime number!");
}
isPrime(5669)

//ex 5 - roman numeral converter

var numerals = ["I", "V", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];

function threes(n, x){
        var iter = "";
        for (var count = 0; count < n; count++){
           iter = (iter + (numerals[x]));
        } 

   return(iter);
}
//threes(3)

function places(n){
    var thou = Math.floor(n / 1000);
    var t = thou*1000;
    var ninehun = Math.floor((n-t) / 900);
    var nh = ninehun*900;
    var fivehun = Math.floor((n-t-nh) / 500);
    var fh = fivehun*500;
    var fourhun = Math.floor((n-t-nh-fh) / 400);
    var foh = fourhun*400;
    var hun = Math.floor((n-t-nh-fh-foh) / 100);
    var h = hun*100;
    var ninety = Math.floor((n-t-nh-fh-foh-h) / 90);
    var ni = ninety*90;
    var fifty = Math.floor((n-t-nh-fh-foh-h-ni) / 50);
    var fi = fifty*50;
    var forty = Math.floor((n-t-nh-fh-foh-h-ni-fi) / 40);
    var fo = forty*40;
    var ten = Math.floor((n-t-nh-fh-foh-h-ni-fi-fo) / 10);
    var te = ten*10;
    var one = Math.floor((n-t-nh-fh-foh-h-ni-fi-fo-te)/ 1);
    var pl = [one, ten, forty, fifty, ninety, hun, fivehun, fourhun, ninehun, thou];
    return pl;
}    
places(1980)




function lilRoman(n, x) {
    var roman = "";
    if (n < 4){
        roman=(threes(n,x));
        
    }else if (n == 4){
        roman = (numerals[0])+(numerals[1]);
        
    }else if (n < 9){
        roman = (numerals[1])+(threes(n-5,0));
        
    }else if (n == 9){
        roman = (numerals[0])+(numerals[2]);
        
    }
        return(roman);
}

//lilRoman(9)
function assert(claim,warning) {
    if (!claim) console.log(warning);
}

function toRoman(n){
    var digits = places(n);
    //console.log(digits);
    var roman = lilRoman(digits[9],10)+lilRoman(digits[8],9)+lilRoman(digits[7],8)+lilRoman(digits[6],7)+lilRoman(digits[5],6)+lilRoman(digits[4],5)+lilRoman(digits[3],4)+lilRoman(digits[2],3)+lilRoman(digits[1],2)+lilRoman(digits[0], 0);
    console.log(roman);
    return(roman);
}
toRoman(2014)

assert(toRoman(2014)==="MMXIV","Test 2014 failed");
assert(toRoman(1066)==='MLXVI',"Test 1066 failed");
assert(toRoman(207)==='CCVII',"Test 207 failed");
assert(toRoman(1954)==='MCMLIV',"Test 1954 failed");
assert(toRoman(22)==='XXII',"Test 22 failed");


//ex 6: deck of cards


function formDeck(){
 var allcards = [];
 var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
 var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
 
    for (var count = 0; count < 13; count++){
        allcards.push((ranks[count]+" of "+suits[0]));
        allcards.push((ranks[count]+" of "+suits[1]));
        allcards.push((ranks[count]+" of "+suits[2]));
        allcards.push((ranks[count]+" of "+suits[3]));
        }
        return(allcards);
}

function suit(card){
    var suits = [1, 2, 3, 4];
    return (suits[(card % 4)])
    
}

function rank(card){
    var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    index = Math.floor((card / 4));
    return (ranks[index]);
    
}

function cardID(rank,suit){
    var subt = [4, 3, 2, 1];
    return((rank * 4) - (subt[(suit-1)]));
}

function color(card){
    var colors = ["red", "red", "black", "black"];
    return(colors[(card % 4)]);
}

function name(card){
    var ranks = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    var rank = ranks[(Math.floor((card / 4)))];
    var suit = (suits[(card % 4)]);
    return (rank + " of " + suit);
}
function precedes(cardA,cardB){
    var ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    var A = ranks[(Math.floor((cardA / 4)))];
    var B = ranks[(Math.floor((cardB / 4)))];
    if (A === (B-1)){
        return (true);
    }else if ((A === 13) && (B === 1)){
        return(true);
            }
        return(false);        
    }
function sameColor(cardA,cardB){
    return(color(cardA)===color(cardB));   
}

function nextInSuit(cardA){
    if (cardA<48){
    return(cardA+4);
    }else{
        return(cardA-48);
    }
}

function prevInSuit(cardB){
    if (cardB>3){
    return(cardB-4);
    }else{
        return(cardB+48);
    }
}
    
    

// TESTING:

var allcards = formDeck();
console.log(allcards[3]);
console.log(suit(31));
console.log(rank(5));
console.log(cardID(13, 4));
console.log(color(31));
console.log(name(5));
console.log(precedes(51,0));
console.log(sameColor(51,50));
console.log(nextInSuit(51));


function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,"Test 1 failed");
assert(rank(3)===1,"Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,"Test 4 failed");
assert(suit(5)===2,"Test 5 failed");
assert(suit(51)===4,"Test 6 failed");
assert(cardID(1,1)===0,"Test 7 failed");
assert(cardID(13,4)===51,"Test 8 failed");
assert(cardID(8,3)===30,"Test 9 failed");
assert(color(0)==='red',"Test 10 failed");
assert(color(2)==='black',"Test 11 failed");
assert(name(5)==='Two of Diamonds',"Test 12 failed");
assert(name(51)==='King of Clubs',"Test 13 failed");
assert(!precedes(0,1),"Test 14 failed");
assert(precedes(0,5),"Test 15 failed");
assert(precedes(51,0),"Test 16 failed");
assert(precedes(50,2),"Test 17 failed");
assert(sameColor(0,1),"Test 18 failed");
assert(!sameColor(1,2),"Test 19 failed");
assert(nextInSuit(0)===4,"Test 20 failed");
assert(nextInSuit(51)===3,"Test 21 failed");
assert(nextInSuit(48)===0,"Test 22 failed");
assert(prevInSuit(0)===48,"Test 23 failed");
assert(prevInSuit(3)===51,"Test 24 failed");
assert(prevInSuit(5)===1,"Test 25 failed");
    


