(function () {
  // Get all draggable elements
  const draggables = document.querySelectorAll(".draggable");

  // Get all container elements
  // ul 찾기(ul은 하나니깐 쿼리셀렉터로)
  const todoList = document.querySelector(".todoLIst");

  // Add drag and dragend event listeners to draggable elements
  draggables.forEach((el) => {
    el.addEventListener("dragstart", () => {
      el.classList.add("dragging");
      //dragging class 를 넣어주는 이유는 스타일 바꿔주기 위해. opacity: 0.5 이런것들...!
    });

    el.addEventListener("dragend", () => {
      el.classList.remove("dragging");
    });
  });

  // Function to find the element after the current position
  function getDragAfterElement(container, y) {
    const draggableElements = [
      ...container.querySelectorAll(".draggable:not(.dragging)"),
    ];

    return draggableElements.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      { offset: Number.NEGATIVE_INFINITY }
    ).element;
  }

  // Add dragover event listener to container elements
  todoList.forEach((todo) => {
    todo.addEventListener("dragover", (e) => {
      e.preventDefault();
      const afterElement = getDragAfterElement(container, e.clientY);
      const currentDraggable = document.querySelector(".dragging");
      container.insertBefore(currentDraggable, afterElement);
    });
  });
})();
