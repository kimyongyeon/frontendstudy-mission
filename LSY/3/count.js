(function () {
  let num = 0;
  return function () {
    return num++;
  };
})();

<input type="check" checked>
  잘함
</input>;

// 스크립트 ... 캡슐화
var checked = false;
function isChecked() {
  return (checked = !checked);
}

// OOP => ES3 => 취약점 => 모듈패턴 => 클래스

function* cnt() {
  let cnt = 0;
  for (;;) {
    yield cnt++;
  }
}

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

function InnerClosureFunction() {
  this.getName = function () {
    return this.name;
  };
  this.setName = function (nm) {
    this.name = nm;
  };
}

function Member() {
  // 모듈패턴, 클래스화
  let name = "";
  let age = 0;

  let MemberObject = {
    getName: function () {},
    getName: function () {},
  };
  return InnerClosureFunction;
}
let member = new Member();
// member.name = 234234;
member.setName("sdsfsf");
member.getName();
