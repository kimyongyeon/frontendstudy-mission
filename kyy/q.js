count(); // 1
count(); // 2
count(); // 3
count(); // 4

// 함수로만 카운트 증가함수를 만드시오. 전역변수를 쓰지 마시오.

// var cnt = 0; // 1000;
// function Seq() {
//   return cnt++;
// }

// Seq();

// cnt = 111000;

// 모듈패턴 => es5 X => 클로저

// jQuery Plugin = 클로저 + 모듈패턴 + 익명함수 + 즉시실행
(function () {})();

// 투두리스트
var todoData = [
  {
    seq: count(),
    title: "sdfsfssdf",
    detail: "sdfsfsdf",
    regDate: "2023-09-01 15:00:00",
    comState: "완료",
  },
  {
    seq: count(),
    title: "sdfsfssdf",
    detail: "sdfsfsdf",
    regDate: "2023-09-01 15:00:00",
    comState: "미완료",
  },
  {
    seq: count(),
    title: "sdfsfssdf",
    detail: "sdfsfsdf",
    regDate: "2023-09-01 15:00:00",
    comState: "삭제",
  },
  {
    seq: count(),
    title: "sdfsfssdf",
    detail: "sdfsfsdf",
    regDate: "2023-09-01 15:00:00",
    comState: "취소",
  },
];

function RdbConnect() {
  let dbUrl = "https://localhost";
  let dbPort = 3306;

  return function () {
    console.log("rdb connect success");
    this.setDbUrl = function (url) {
      dbUrl = url;
    };

    this.getDbUrl = function () {
      return dbUrl;
    };

    this.setPort = function (port) {
      dbPort = port;
    };

    this.getPort = function () {
      return dbPort;
    };

    return this;
  };
}
let rdbConnect = new RdbConnect();
console.log(rdbConnect().getDbUrl());
console.log(rdbConnect().setDbUrl("https://dev.local.study.or.kr"));
console.log(rdbConnect().getDbUrl());
