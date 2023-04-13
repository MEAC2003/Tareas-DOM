const btn = document.querySelector("[data-form-btn]");

//Arrow function o funciones anonimas
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  const value = input.value;
  const list = document.querySelector("[data-list]");
  const task = document.createElement("li");
  task.classList.add("card");
  input.value = "";
  const content = `<div>
  <i class="far fa-check-square icon"></i>
  <span class="task">${value}</span>
</div>
<i class="fas fa-trash-alt trashIcon icon"></i>`
  task.innerHTML = content;
  list.appendChild(task);
  console.log(content);
};

btn.addEventListener("click", createTask)


// Sin Arrow function
// btn.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });
