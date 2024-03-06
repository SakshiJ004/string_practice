//character pass karto
//indexOf() method=returns the index (position) of the first occurrence of a string in a string, 
//or it returns -1 if the string is not found:
let text="please locate where 'locate' occurs!";
let result=text.indexOf("where")
console.log(result);

//lastIndexOf() method=returns the index of the last occurrence of a specified text in a string
let text1="javascript is interpreted language."
let result1=text1.lastIndexOf("s")
console.log(result1)

//search() method= searches a string for a string (or a regular expression) and returns the position of the match
let text2="my name is sakshi jadhav"
let result2=text2.search("a")
console.log(result2)

//The includes() method returns true if a string contains a specified value.
//Otherwise it returns false.
let text3="welcome to the universe"
let result3=text3.includes("welcome",2)
console.log(result3)