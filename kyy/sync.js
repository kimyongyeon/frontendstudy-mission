// 동기
let a = a + 1;
console.log(a);

// 비동기
console.log("hello1"); // callstack -> js v8 engine api
setTimeout(() => {
  // webapi -> callback queue
  console.log("hello2");
}, 0);
console.log("hello3"); // callstack
// 1 => 3 => 2
