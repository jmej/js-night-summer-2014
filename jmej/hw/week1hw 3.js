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

function toRoman(n){
    var digits = places(n);
    //console.log(digits);
    var roman = lilRoman(digits[9],10)+lilRoman(digits[8],9)+lilRoman(digits[7],8)+lilRoman(digits[6],7)+lilRoman(digits[5],6)+lilRoman(digits[4],5)+lilRoman(digits[3],4)+lilRoman(digits[2],3)+lilRoman(digits[1],2)+lilRoman(digits[0], 0);
    console.log(roman);
}
toRoman(1066)

//ex 6: deck of cards

var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
var suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

function formDeck(){
 var allcards = [];
 
    for (var count = 0; count < 13; count++){
        allcards.push((ranks[count]+" of "+suits[0]));
        allcards.push((ranks[count]+" of "+suits[1]));
        allcards.push((ranks[count]+" of "+suits[2]));
        allcards.push((ranks[count]+" of "+suits[3]));
        }
        return(allcards);
}

function formRanks(n){
        allcards[
}


var allcards = formDeck();
console.log(allcards[51]);


 
