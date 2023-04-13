(() => {
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
      const content =
        `<i class="fas fa-trash-alt trashIcon icon"></i>`
      // task.innerHTML = content;
      task.appendChild(taskContent)
      list.appendChild(task);
    } else {
      alert("Por favor, debe agregar contenido");
    }
  };

  btn.addEventListener("click", createTask);

  const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", completeTask)
    return i;
  }
  // Immediately invoked function expression IIFE
  const completeTask = (event) => {
    const element = event.target;
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");
  }

})();

// Sin Arrow function
// btn.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });
