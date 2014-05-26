/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */

//ex. 2
function twelvedays(day){
    var gift= ["a partridge in a pear tree", "two turtle doves", "three french hens", "four calling birds", "five golden rings", "six geese a-laying", "seven swans a-swimming", "eight maids a-milking", "nine ladies dancing", "ten lords a-leaping", "eleven pipers piping", "twelve drummers drumming"];
    var days = ["first", "second", "third", "fouth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth", "eleventh", "twelfth"];
    var firstline = "On the "+days[day]+" day of Christmas my true love gave to me, "+gift[day];
    return firstline;
       for (var count = day; count > 0; count --){
          nextline = ","+"\n"+gift[(count - 1)];
          return nextline;
    }
}

for (var counter = 0; counter < 12; counter++) {
    twelvedays(counter);
}



//ex. 3

//a
function and3(a,b,c){
    if (a!==b){
        return false;
    }
else if (b!==c){
    return false;
    }
else{
    return a;
}
}

//b
function andN(n,values){
    if (n == 0){
        return undefined;
    }
    else if (n == 1){
        return values[0];
    }
    else {
        for (var count = n; count > 2; count--){
            var result = (values[count]==values[count-1]);
            if (result == false){
                return result;
            }else{
                return == values[0];
            }
        }
    }
}
andN(4,[5, "5", 5, false])


//c
//none of these work because == doesn't evaluate the same way as the booleans

and3(5, "5", 5);
//returns false
5 && "5" && 5
//returns 5

