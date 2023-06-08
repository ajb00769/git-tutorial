function getDiff(num) {
  if (num <= 13) {
    return 13 - num;
  } else {
    return num - 13;
  }
}

const diff = (num = 100) => {
  if (num <= 13) {
    return 13 - num;
  } else {
    return num - 13;
  }
};

console.log(getDiff(22));
console.log(diff(22));
console.log(diff());
