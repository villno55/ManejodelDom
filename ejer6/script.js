const input = document.getElementById("inputTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

btnAgregar.addEventListener("click", () => {
  if (input.value.trim() === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  const divTarea = document.createElement("div");
  divTarea.classList.add("tarea");

  const texto = document.createElement("span");
  texto.textContent = input.value;

  const check = document.createElement("span");
  check.textContent = "✔";
  check.classList.add("icono", "check");
  check.addEventListener("click", () => {
    check.classList.toggle("realizada");
  });

  const eliminar = document.createElement("span");
  eliminar.textContent = "✖";
  eliminar.classList.add("icono", "delete");
  eliminar.addEventListener("click", () => {
    if (confirm("¿Seguro que deseas eliminar esta tarea?")) {
      divTarea.remove();
    }
  });

  divTarea.appendChild(texto);
  divTarea.appendChild(check);
  divTarea.appendChild(eliminar);
  lista.appendChild(divTarea);

  input.value = "";
});
