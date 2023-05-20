const date = new Date();
const dayFormatter = new Intl.DateTimeFormat("en", { weekday: "long" }).format(
  date
);
const dateFormatter = new Intl.DateTimeFormat("en", {
  dateStyle: "medium",
}).format(date);
const timeFormatter = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
}).format(date);

console.log(`Today is: ${dayFormatter}.`);
console.log(`The date today is: ${dateFormatter}`);
console.log(`Current time is: ${timeFormatter}`);

const prependZero = (n) => (n < 10 ? "0" + n : "" + n);
const day = date.getDate();
const month = prependZero(date.getMonth()); // returns a number but js auto converts it into a string using the prependZero function even without writing the logic to do the conversion
const year = date.getFullYear();

console.log(
  `${month}-${day}-${year}\n${month}/${day}/${year}\n${day}-${month}-${year}\n${day}/${month}/${year}`
);
