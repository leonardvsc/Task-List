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
  //botaoApagar.classList.add("bi", "bi-trash3");
  //outra forma de adicionar classes a um elemento e qualquer propriedade do elemento.
  botaoApagar.setAttribute("class", "bi bi-trash3 btn-apagar");
  botaoApagar.setAttribute("title", "Delete task");
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

document.addEventListener("click", function (e) {
  const element = e.target; // Seleciona o elemento que disparou o evento click
  // Se o elemento tiver a classe btn-apagar
  if (element.classList.contains("btn-apagar")) {
    element.parentElement.remove(); // Remove o elemento pai do elemento que o disparou
  }
});
