function controle(){
    // variável com referência ao elemento HTML
    var btn = document.getElementById("btn"); // obter o elemento pelo id
    var box01 = document.getElementById("box-01");
    var box02 = document.getElementById("box-02");
    var box03 = document.getElementById("box-03");
    var box04 = document.getElementById("box-04");
    var container = document.getElementById("container");

    if(btn.innerHTML == "PAUSE"){ // verificar se o texto do elemento
        btn.innerText = "PLAY"; // muda a palavra ao clicar no PAUSE (alterar o conteúdo)
        box01.style.animationPlayState = "paused"; // pausar execução
        box02.style.animationPlayState = "paused"; 
        box03.style.animationPlayState = "paused"; 
        box04.style.animationPlayState = "paused"; 
        container.style.backgroundColor = "#000"
    }
    else {
        btn.innerText = "PAUSE"; 
        box01.style.animationPlayState = "running"; // voltar a execução
        box02.style.animationPlayState = "running"; 
        box03.style.animationPlayState = "running"; 
        box04.style.animationPlayState = "running"; 
        container.style.backgroundColor = "#FFF"
    } 
}