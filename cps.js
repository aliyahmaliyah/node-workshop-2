function firstLetter(string, fn) {
    return fn(string.charAt(0));
}
firstLetter("hello!", function(str){return str})

//

function lastLetter(string, fn) {
    return fn(string.charAt(string.length-1));
}
lastLetter("hello!", function(str){return str});

//

function getFirstandLast(string, fn){
    return firstLetter(string,fn) + lastLetter(string,fn);
    };
    
getFirstandLast("hello", function(newStr) { console.log(newStr); }); // should output "ho"