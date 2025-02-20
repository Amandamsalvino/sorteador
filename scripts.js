const botaoSortear = document.querySelector(".sortear")

const numero = document.querySelector(".numero-result")

const numeroSorteado = document.querySelector(".numero-sorteado")

function sorteio(){

    const min = Math.ceil(document.querySelector(".esquerdo").value)

    const max = Math.floor(document.querySelector(".direito").value)
    
    const resultado = Math.floor(Math.random() * (max - min + 1)) + min;

    

    numero.innerHTML = resultado

    numeroSorteado.style.visibility = "visible"  
    
  
}

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") { // Verifica se a tecla pressionada é "Enter"
        location.reload(); // Recarrega a página
    }
});



botaoSortear.addEventListener("click", sorteio)


