const btn = document.querySelector("[data-form-btn]");

//Arrow function o funciones anonimas
const createTask = (evento) => {
  evento.preventDefault();
  const input = document.querySelector("[data-form-input]");
  console.log(input.value);
};

btn.addEventListener("click", createTask) 


// Sin Arrow function
// btn.addEventListener("click", function (evento) {
//   evento.preventDefault();
//   const input = document.querySelector("[data-form-input]");
//   console.log(input.value);
// });
