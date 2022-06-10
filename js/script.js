//string length

let stringLength = function(str){
    let index = 0; // index to get the last element of the string
    // if str[index] == undefined then we got at the end of the string
    while(str[index] !== undefined){
        index++;
    }
    return index;
}
console.log(stringLength(`Hello Iam Khodor Shhoury`)); //24


// string reverse

let stringReverse = function(str){
    let reversedString = "", // returned reversed string varibale
        index = 0; // index to get the last element of the string

        // if str[index] == undefined then we got at the end of the string
    while(str[index] !== undefined){
        index++;
    }

    for(let i = 0 ; index > 0 ; i++){
        reversedString += str[--index]
    }
    
    return reversedString //return reversed string
}
console.log(stringReverse("hello")); // olleh



// string to array

let stringToArray = function(str){

    let array = [];  //empty array to push string characters into it

    let index = 0; // index to get the last element of the string
    // if str[index] == undefined then we got at the end of the string
    while(str[index] !== undefined){
        index++;
    }

    for(let i = 0 ; i < index ; i++){
        array[i] = str[i]     //push every string character to array index
    }
    return array
}
console.log(stringToArray("Hello"))



//string repeat

let stringRepeat = function(str, times, bool){
    let repeatedString ="";
    let separator = bool ? " " : "";
    
        for(let i = 0; i < times; i++){
            
        repeatedString += `${str}${separator}`; //---> with template literals

        //repeatedString += str + separator; //---> without template literals

        }
    return repeatedString;
}
console.log(stringRepeat("Hello",5,true)) //  Hello Hello Hello Hello Hello
console.log(stringRepeat("Hello",5,false)) //  HelloHelloHelloHelloHello
