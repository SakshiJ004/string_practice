//length property
let name="sunday is funday"
console.log(name.length)

//slice method
let string1="sakshijadhav"
console.log(string1.slice(3))

let str1="absvju thfgjfd"
let result1=str1.slice(5,9)
console.log(result1);

//substring method
let string2="javascript is interpreted language"
let result2= string2.substring(15,5)
console.log(result2)

//substr method
//start pt,length
let string3="i am chaitali patil"
let result3=string3.substr(2,5)
console.log(result3)

//toUpperCase method
//toLowerCase method
let string4="Fullstack Course"
// let result4=string4.toUpperCase();
let result4=string4.toLowerCase();
console.log(result4);

//concat=can be used instead of the plus operator
let string5="Hello"
let string6="World"
let result5=string5.concat(" ",string6)
console.log(result5)

//trim=removes whitespace from both sides oa string
let string7="        my name is sakshi jadhav"
let result6=string7.trim();
console.log(result6)

//replace=replace specified value with another value
let text="please visit microsoft"
let result7=text.replace("microsoft","w3schools");
console.log(result7)

//split= can be converted to an array 
let text2="Hello, World"
let result8=text2.split()
console.log(result8)