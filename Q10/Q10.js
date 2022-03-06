function reverseString(str) {
    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;   
}

// take input from the user
let str = "hello";
const output = reverseString(str);
console.log(output);