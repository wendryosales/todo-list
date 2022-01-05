const inputText = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

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
const allLi = document.getElementsByTagName('li');

function selectionGray (event) {
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

// remover allLi da lista
const buttonRemove = document.getElementById('apaga-tudo');
buttonRemove.addEventListener("click", apagaTudo);

function apagaTudo () {
    list.innerHTML = '';
} 

//remover finalizados

const buttonFinalizados = document.getElementById('remover-finalizados');
buttonFinalizados.addEventListener("click", finalizado);

function finalizado () {
    let finalizados = document.getElementsByClassName('completed');

    //ref https://qastack.com.br/programming/4777077/removing-elements-by-class-name  (achei interessante dessa forma sem usar o jquery)
    while(finalizados.length > 0){
        finalizados[0].parentNode.removeChild(finalizados[0]);
    }
}

//salvar allLi no localStorage
const buttonSave = document.getElementById('salvar-tarefas');

buttonSave.addEventListener("click", save);

function save (){
    localStorage.clear();
    for ( let i = 0; i < allLi.length; i += 1 ){
        if(allLi[i].className == "completed"){
            localStorage.setItem(i, allLi[i].innerHTML + '; completed');
        } else { 
            localStorage.setItem(i, allLi[i].innerHTML);

        }
    }
}

function recuperar (){
    for ( let i = 0; i < localStorage.length; i += 1 ){
        let local = localStorage.getItem(i);
        if ( local.includes('completed')){
            let localNew = local.replace('; completed', '');
            createLi(localNew);
            for (let n = 0; n < allLi.length; n += 1){
                allLi[i].classList.add('completed');
            }
        }else{
            createLi(local);
        }
    }
}
recuperar()


/* const buttonMovePlus = document.getElementById('mover-cima');
buttonMovePlus.addEventListener('click', moverCima)

function moverCima () {
    let elementoGray = document.querySelector('.gray');
    elementoGray.previousSibling = elementoGray.innerHTML;
} */