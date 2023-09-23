// var let, const => 호이스팅, 스코프

// ES3 - javascript
console.log(`before 옛날변수 = ${옛날변수}`); // undefined
var 옛날변수 = "옛날변수"; // 생성 -> 초기화 -> 실행
console.log(`after 옛날변수 = ${옛날변수}`); // 옛날변수

// ES5
// console.log(`before 현대변수 = ${현대변수}`); // error
let 현대변수; // 생성 -> TDZ -> 초기화 -> 실행
console.log(`after 현대변수 = ${현대변수}`); // 현대변수

// console.log(`before 상수 = ${상수}`); // error
const 상수 = "3.14"; // 생성 -> TDZ -> 초기화 체크 -> 실행
console.log(`after 상수 = ${상수}`); // 상수

// const라도 객체, 어레이는 값 변경이 가능하다.
// 프로토타입 ?
const 상수객체 = {
  name: "김용연",
};
console.log(`after 상수객체 = ${JSON.stringify(상수객체)}`); // 상수
상수객체.name = "문정은";
console.log(`after 상수객체 = ${JSON.stringify(상수객체)}`); // 상수

// 스코프 ~~~ 함수, 렉시컬

// function test() {
//   for (var i = 0; i < 10; i++) {
//     console.log("inner : ", i); // ?
//   }
//   console.log("outer : ", i); // ?
// }
// test();

// {
//   let a = 123123123;
//   var v = 2313123;
// }
// v

// function test2() {
//   for (let i = 0; i < 10; i++) {
//     console.log("inner : ", i);
//   }
//   console.log("outer : ", i);
// }
// test2();

function asyncTest() {
  // 스택
  for (var i = 0; i < 10; i++) {
    // 즉시실행함수, 클로저
    (function (ii) {
      // console.log(i);
      setTimeout(() => {
        console.log(ii);
      }, 100);
    })(i); // 지역변수가 캡쳐 된다. => 지역변수를 내부함수에서 사용할 수 있는 것을 클로저
    // setTimeout(() => {
    //   console.log(i);
    // }, 100);
  }
  // for (let i = 0; i < 10; i++) { // var x or  let O
  //   setTimeout(() => { // 비동기함수 => 큐 => 스택
  //     console.log(i); // 0 ~ 9
  //   }, 100);
  // }
}
// asyncTest();

// 클로저!!!
function closure() {
  var i = 9;
  return function () {
    console.log(i++);
  };
  // return inner();
}
var a = closure();
a.i = 234234;
a();
a();
a();

// toggle, count ...
let count = 0;
function getCount() {
  return count++;
}
console.log(getCount());
// 쓰레드 세이프 하지 않다.
count = 2;
console.log(getCount());
console.log(getCount());

// toggle

let flag = false;
function getToggle() {
  flag = !flag;
  return flag;
}
console.log(getToggle());
// 불변이 아니다.
// 쓰레드 세이프 하지 않다.
flag = true;
console.log(getToggle());
console.log(getToggle());

// todo
const todoList = [
  {
    id: 1,
    title: "오늘 공부했어",
    comYn: true,
  },
];

let seq = (function () {
  let count = 0;
  return function () {
    return count++;
  };
})();

todoList.push({
  id: seq(),
  title: "오늘 공부했어",
  comYn: true,
});
todoList.push({
  id: seq(),
  title: "오늘 공부했어",
  comYn: true,
});
todoList.push({
  id: seq(),
  title: "오늘 공부했어",
  comYn: true,
});

console.log(JSON.stringify(todoList));

// 모듈패턴!
function modulePatter() {
  let name = ""; // 캡슐화
  function setName(n) {
    name = n;
  }
  function getName() {
    return name;
  }
  return {
    setName,
    getName,
  };
}

// 자바스크립트 함수 호출 방법
// 1. modulePatter(); // 일반 함수 호출
// 2. new modulePatter(); // 객체 함수 호출

const m = new modulePatter();
// m.name = 231232;
console.log(m.getName());
console.log(m.setName("12313123"));
console.log(m.getName());

// jquery ~~~ plugin
let plugin = (function pluginTest() {
  function test() {}
  return {
    test,
  };
})();
plugin.test();

// todo list add, remove, edit, finder

// todo.add(item); // void => list
// todo.remove(id); // void => list
// todo.edit({ id, item }); // void => list
// todo.finder(item.comState); // list

let todo = (function () {
  const list = [
    { id: 1, title: "werwerwer", comState: "완료" },
    { id: 2, title: "werwerwer", comState: "취소" },
    { id: 3, title: "werwerwer", comState: "삭제" },
  ];
  function add(item) {
    list.push(item);
  }
  function edit(_id, _newItem) {
    remove(_id); // redux, 불변으로 짤 수 있어요.
    add(_newItem);
    // list = [
    //   ...list.filter((item) => item.id == _id).map((item) => (item = _newItem)),
    // ];
  }
  function remove(id) {}
  function finder(item) {}
  return {
    add,
    edit,
    remove,
    finder,
  };
})();
// todo.add(null);
todo.remove(null);
todo.edit(null);
todo.finder(null);

// 모듈 패턴 => 객체지향 클래스 => MVC

// OOP, 갹채지향, SOLID 원칙
// 1. 단일책임의 원칙
// 2. 오픈클로즈 원칙
// 3. 리스코프 원칙
// 4. 인터페이스 분리의 원칙
// 5. 의존성 역전의 원칙

// 초급 : 동작코드 짜기
// 중급 : 디자인패턴/원칙 적용한 코드 짜기
// 고급 : 성능/최적화 따지면서 짜는 코더
// 특급 : 아키텍처 설계 가능한 개발자
class TodoObject {
  constructor() {
    this.list = [];
  }

  add() {}
  remove() {}
  edit() {}
}

const todo = new TodoObject();
todo.add();
