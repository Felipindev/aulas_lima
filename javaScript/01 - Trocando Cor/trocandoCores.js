//criando uma função para alterar a cor

function aplicarCor() {
    const cor = document.getElementById("selecaoCor").value;
    document.body.style.backgroundColor = cor
}

//cor aleatoria
function qualquer(){
    document.getElementById("r").innerHTML = "R:"
    document.getElementById("g").innerHTML = "G:"
    document.getElementById("b").innerHTML = "B:"


    //função para gerar numero aleatorio Math.floor (0 a 0.999)
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)

    document.getElementById("r").innerHTML += r;
    document.getElementById("g").innerHTML += g;
    document.getElementById("b").innerHTML += b;

    const cor = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = cor
}

function dark() {
    document.getElementById("r").innerHTML = "R: "
    document.getElementById("g").innerHTML = "G: "
    document.getElementById("b").innerHTML = "B: "


    const preto = `rgb(0,0,0)`
    document.body.style.backgroundColor = preto
}

function white() {
    document.getElementById("r").innerHTML = "R: "
    document.getElementById("g").innerHTML = "G: "
    document.getElementById("b").innerHTML = "B: "

    const branco = `rgb(255,255,255)`
    document.body.style.backgroundColor = branco
}