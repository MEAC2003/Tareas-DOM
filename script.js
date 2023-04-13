import checkComplete from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

const btn = document.querySelector("[data-form-btn]");

//Arrow function o funciones anonimas
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  if (value != "") {
    task.classList.add("card");
    input.value = "";
    //backticks
    const taskContent = document.createElement("div");
    const titleTask = document.createElement("span");
    titleTask.classList.add("task");
    titleTask.innerText = value;
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    // task.innerHTML = content;
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);
  } else {
    alert("Por favor, debe agregar contenido");
  }
};

btn.addEventListener("click", createTask);

// Sin Arrow function
// btn.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });
