const count = (() => {
  let num = 0;
  return () => {
    return num++;
  };
})();

console.log(count()); // 0
console.log(count()); // 1
console.log(count()); // 2
console.log(count()); // 3
