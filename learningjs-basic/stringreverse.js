const myString = "this is my string";
const reverseString = (n) => {
  return n.split("").reverse().join("");
};

console.log(reverseString(myString));
console.log(myString.substring(0, 4));
