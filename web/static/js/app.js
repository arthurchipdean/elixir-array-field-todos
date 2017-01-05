// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

// import socket from "./socket"
window.onload = () => {
  const removeElement = ({target}) => {
    let el = document.getElementById(target.dataset.id);
    let li = el.parentNode;
    li.parentNode.removeChild(li);
  }
  Array.from(document.querySelectorAll(".remove-form-field"))
  .forEach(el => {
     el.onclick = (e) => {
       removeElement(e);
     }
  });
  Array.from(document.querySelectorAll(".add-form-field"))
  .forEach(el => {
    el.onclick = ({target: {dataset}}) => {
      let container = document.getElementById(dataset.container);
      let index = container.dataset.index;
      let newRow = dataset.prototype;
      container.insertAdjacentHTML("beforeend",       newRow.replace(/__name__/g, index));
      container.dataset.index = parseInt(container.dataset.index) + 1;
      container.querySelector("a.remove-form-field").onclick = (e) => {
        removeElement(e);
      }
    }
  });
}
