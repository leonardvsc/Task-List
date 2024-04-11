/* SELECIONANDO ELEMENTOS */
const inputTarefa = document.querySelector(".input-tarefa");
const btnAddTarefa = document.querySelector(".btn-add-tarefa");
const tarefas = document.querySelector(".tarefas");

document.addEventListener("DOMContentLoaded", function () {
  carregaTarefasSalvas();
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
  salvarTarefas();
}

btnAddTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener("keypress", function (e) {
  // Quando estiver no input e pressionar uma tecla
  // Se a tecla pressionada for ENTER
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return; // Se o input estiver vazio, retorna
    criaTarefa(inputTarefa.value); // Se o input tiver conteúdo, cria uma tarefa
  }
});

document.addEventListener("click", function (e) {
  const element = e.target; // Seleciona o elemento que disparou o evento click
  // Se o elemento tiver a classe btn-apagar
  if (element.classList.contains("btn-apagar")) {
    // Pergunta se realmente quer apagar a tarefa
    const confirmar = confirm("Are you sure you want to delete this task?");
    if (confirmar) {
      element.parentElement.remove(); // Remove o elemento pai do elemento que o disparou
      salvarTarefas(); // Salva as tarefas atualizadas depois de apagar uma tarefa
    }
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); // Seleciona todas as tarefas (li) da lista de tarefas (ul)
  const listaDeTarefas = [];

  // Para cada tarefa (li) da lista de tarefas (ul)
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText; // Seleciona o texto da tarefa (li)
    listaDeTarefas.push(tarefaTexto.trim()); // Adiciona o texto da tarefa (li) a uma lista e retira os espaços em brancos do começo e do fim
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas); // Transforma a lista de tarefas em uma string JSON
  localStorage.setItem("tarefas", tarefasJSON); // Salva a string JSON no localStorage
}

function carregaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas"); // Pega as tarefas do localStorage
  const listaDeTarefas = JSON.parse(tarefas); // Transforma a string JSON em uma lista array
  for (let tarefa of listaDeTarefas) {
    // Para cada tarefa na lista de tarefas
    criaTarefa(tarefa); // Cria uma tarefa
  }
}
