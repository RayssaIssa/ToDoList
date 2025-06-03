document.addEventListener("DOMContentLoaded", () => {

// Mapeando os elementos de adicionar tarefa
const importante = document.getElementById('importante')
const nomeTarefa = document.getElementById('tarefa')
const buttonAdd = document.getElementById('adicionar')

function addTarefa(nome){
    let imp = "Não"
    if(importante.classList.contains('prioritario'))
        imp = "Sim"
    console.log(`Tarefa: ${nome} | Importante ${imp}`)
    //console.log("clicado em add")
}

buttonAdd.addEventListener('click', () => {
    var nome = nomeTarefa.value
    if(nome === ""){
        var msgError = "Campo de tarefa vazio!"
        erro(msgError)
        //console.log("Nome tarefa nulo")
    }else{
        addTarefa(nome)
    }
})

// Colorindo e descolorindo a estrela de prioridade
importante.addEventListener('click', () =>{
    if(importante.classList.contains('prioritario')){
        importante.classList.remove('prioritario')
    }else{
        importante.classList.add('prioritario')
        console.log("Prioritario!")
    }
})


// Parte da mensagem de erro
const alertaErro = document.querySelector('.erro')

function erro(mensagem){
    alertaErro.style.display = 'block'
    alertaErro.textContent = mensagem
    
    setTimeout(() => {
        alertaErro.style.display = 'none'
        alertaErro.textContent = ""
    }, 4000)
}


})