export function handleContainerClick(event) {
  if (event.target.classList.contains("remove-button")) {
    let paneElement = event.target.closest(".pane");
    if (paneElement) {
      paneElement.remove();
    }
  }
}

export function handleTreeClick(event) {
  if (event.target.tagName === "LI") {
    let ul = event.target.querySelector("ul");
    if (ul) {
      ul.style.display = ul.style.display === "none" ? "" : "none";
    }
  }
}

export function handleGridClick(event) {
  if (event.target.tagName === "TH") {
    let columnType = event.target.getAttribute("data-type");
    let columnIndex = Array.from(event.target.parentNode.children).indexOf(
      event.target
    );
    let tbody = document.querySelector("#grid tbody");
    let rowsArray = Array.from(tbody.rows);

    let compare;
    if (columnType === "number") {
      compare = (rowA, rowB) =>
        rowA.cells[columnIndex].innerHTML - rowB.cells[columnIndex].innerHTML;
    } else if (columnType === "string") {
      compare = (rowA, rowB) =>
        rowA.cells[columnIndex].innerHTML.localeCompare(
          rowB.cells[columnIndex].innerHTML
        );
    }

    rowsArray.sort(compare);

    for (let row of rowsArray) {
      tbody.appendChild(row);
    }
  }
}
