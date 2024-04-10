/* SELECIONANDO ELEMENTOS */
const inputTarefa = document.querySelector(".input-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

document.addEventListener("DOMContentLoaded", function () {
  inputTarefa.focus();
});

function criaLi() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  inputTarefa.value = "";
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  const botaoApagar = document.createElement("i");
  botaoApagar.classList.add("bi", "bi-trash3");
  li.appendChild(botaoApagar);
}
function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  criaBotaoApagar(li);
  limpaInput();
}

btnAddTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});
