//클로저 함수 예시1
function closure() {
  var i = 9;
  return function () {
    console.log(i++);
  };
}
var a = closure();
a(); //9
a(); //10
a(); //11

//클로저 함수 예시2
function getToggle() {
  let flag = false;
  return function () {
    return (flag = !flag);
  };
}
var a = getToggle();

console.log(a()); //true
console.log(a()); //false
console.log(a()); //true

// todo add, remove, edit, finder

let todo = function () {
  const list = [
    {
      id: 1,
      title: "ddd",
      comState: "완료",
    },
    {
      id: 1,
      title: "ddd",
      comState: "완료",
    },
    {
      id: 1,
      title: "ddd",
      comState: "완료",
    },
  ];

  function add(item) {
    list.push(item);
  }
  function edit(_id, _newItem) {
    remove(_id);
    add(_newItem);
  }
  function remove(id) {
    list.filter((item) => item.id !== _id);
  }
  function finder(item) {
    list.find((item) => item.comState === _item.comState);
  }
  return {
    add,
    edit,
    remove,
    finder,
  };
};

todo.add({
  id: 2,
  title: "ddd",
  comState: "완료",
});

// todo.add(item);
// todo.remove(id);
// todo.edit({id, item});
// todo.finder(item.comState);
