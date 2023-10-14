export const Util = (function () {
  function createTooltip(tooltipText, target, tooltipSelector = "body") {
    let tooltipElem = document.createElement("div");
    tooltipElem.className = "tooltip";
    tooltipElem.innerHTML = tooltipText;
    document.querySelector(tooltipSelector).append(tooltipElem);

    let coords = target.getBoundingClientRect();
    let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
    if (left < 0) left = 0;
    let top = coords.bottom + 5;
    if (
      top + tooltipElem.offsetHeight >
      document.documentElement.clientHeight
    ) {
      top = coords.top - tooltipElem.offsetHeight - 5;
    }

    tooltipElem.style.left = left + "px";
    tooltipElem.style.top = top + "px";

    target.onmouseout = function () {
      tooltipElem.remove();
      target.onmouseout = null;
    };
  }

  return {
    createTooltip,
  };
})();
