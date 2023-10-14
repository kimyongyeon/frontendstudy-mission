import { Util } from "./modules/util";

import {
  handleContainerClick,
  handleTreeClick,
  handleGridClick,
} from "./modules/eventHandler";

// document.querySelector("#container").addEventListener("click");
document.getElementById("tree").addEventListener("click", handleTreeClick);
document.getElementById("grid").addEventListener("click", handleGridClick);

document.addEventListener("mouseover", function (event) {
  let tooltipText = event.target.getAttribute("data-tooltip");
  if (tooltipText) {
    Util.createTooltip(tooltipText, event.target);
  }
});

document.getElementById("itemList").addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    alert(event.target.textContent + " Clicked!");
  }
});
