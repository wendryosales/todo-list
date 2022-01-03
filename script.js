let inputText = document.getElementById('texto-tarefa');
let buttonAdd = document.getElementById('criar-tarefa');
let list = document.getElementById('lista-tarefas');

//armazenar o texto digitado no input e adicionar a lista com o botão
buttonAdd.addEventListener("click", chamaLi);

function chamaLi(event){
    let texto = inputText.value;
    createLi(texto);
    inputText.value = '';
}

function createLi(textoValue){
    let li = document.createElement("li");
    let txt = document.createTextNode(textoValue); // Referência do w3Schools
    list.appendChild(li);
    li.appendChild(txt);
    li.addEventListener("click", selectionGray);
    li.addEventListener("dblclick", selectionCompleted);
}

// Adicionar a classe #gray ao item da lista

function selectionGray (event) {
    let allLi = document.querySelectorAll('li');
    let liAtual = event.target;
    liAtual.classList.toggle('gray');

    for ( let i = 0; i < allLi.length; i += 1){
        if (allLi[i].className == 'gray' && allLi[i] !== liAtual ){
            allLi[i].classList.remove('gray');
        }
    }
}
// adicionar a classe completed ao item da lista
function selectionCompleted (event) {
    let liAtual = event.target;
    liAtual.classList.toggle('completed');
}

// remover itens da lista
let buttonRemove = document.getElementById('apaga-tudo');
buttonRemove.addEventListener("click", apagaTudo);

function apagaTudo () {
    list.innerHTML = '';
} 

//remover finalizados

let buttonFinalizados = document.getElementById('remover-finalizados');
buttonFinalizados.addEventListener("click", finalizado);

function finalizado () {
    let finalizados = document.getElementsByClassName('completed');

    //ref https://qastack.com.br/programming/4777077/removing-elements-by-class-name  (achei interessante dessa forma sem usar o jquery)
    while(finalizados.length > 0){
        finalizados[0].parentNode.removeChild(finalizados[0]);
    }
}