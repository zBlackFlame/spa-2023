// Declara um vetor
let tarefas =[];

// Seleciona o elemento HTML com o id "btnSalvar" e adiciona o evento click à ele
document.querySelector("#btnSalvar").addEventListener("click", function(e) {
    // Adiciona o valor digitado em "txtTarefas" ao vetor "tarefas"
    tarefas.push(document.querySelector("#txtTarefa").value);
    // Limpa o valor do input 'txtTarefas'
    document.querySelector("#txtTarefa").value = '';
    // Limpa o conteúdo do elemento com id "lstTarefas"
    document.querySelector("#lstTarefas").innerHTML = '';
    // Percorre os elementos do vetor "tarefas"
    tarefas.forEach(item => {
        // Cria uma variável concatenando a sintaxe da tag 'li' ao valor de 'item'
        let li = '<li>' + item + '</li>';
        // Adiciona o conteúdo da variável 'li' à tag com o id 'lstTarefas'
        document.querySelector("#lstTarefas").innerHTML += li;
        // console.log(li);
    });
});