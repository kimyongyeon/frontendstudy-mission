document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.querySelector(".todo"); //input
  const addTodoBtn = document.querySelector(".addTodo"); //button
  const todoList = document.querySelector(".todoList"); //ul

  let todos = [];

  //localStorage에서 데이터 가지고 오기
  const getSaveTodos = localStorage.getItem("todos");

  console.log(getSaveTodos);

  const createTodoItem = (todo) => {
    const list = document.createElement("li");

    list.innerHTML = `
                  ${todo.text}
                  <div>
                    <button class="done">완료</button>
                    <button class="delete" data-id="${todo.id}">삭제</button>
                  </div>`;

    todoList.appendChild(list);

    const deleteTodo = () => {
      const getIdToRemove = parseInt(
        list.querySelector(".delete").getAttribute("data-id")
      );

      todoList.removeChild(list);

      todos = todos.filter((todo) => todo.id !== getIdToRemove);
      saveTodos();
    };

    const doneTodo = () => {
      list
        .querySelector(".done")
        .parentNode.parentNode.classList.toggle("add-line");
    };

    list.querySelector(".done").addEventListener("click", () => {
      doneTodo();
    });

    list.querySelector(".delete").addEventListener("click", () => {
      deleteTodo();
    });
  };

  if (getSaveTodos) {
    todos = JSON.parse(getSaveTodos);
    console.log(todos);

    todos.forEach((todo) => {
      createTodoItem(todo);
    });
  }

  //추가 버튼 클릭 시
  const clickAddTodo = () => {
    const inputText = todoInput.value;
    const newObj = {
      text: inputText,
      id: new Date().getTime(),
      isDone: false,
    };
    todoInput.value = "";
    if (inputText) {
      todos.push(newObj);
      saveTodos();
      createTodoItem(newObj);
    } else {
      alert("할일을 입력하세요");
    }
  };

  addTodoBtn.addEventListener("click", (event) => {
    clickAddTodo();
  });

  const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

});
