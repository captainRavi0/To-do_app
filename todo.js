document.addEventListener("DOMContentLoaded", function () {

const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTasks() {

inputbox.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const inputVal = inputbox.value.trim();

    if (inputVal === "") {
      alert("Please enter something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputbox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    }
    inputbox.value = "";
    saveTasks()
  }
}
);
}

  listContainer.addEventListener("click",function (e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
      } 
      else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
       saveTasks();
      }
    });

  function saveTasks(){
    localStorage.setItem("tasks", listContainer.innerHTML);
}

function showTasks(){
  listContainer.innerHTML = localStorage.getItem("tasks");
}

addTasks();
showTasks();

});







