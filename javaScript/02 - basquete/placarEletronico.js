
let pontosTime1 = 0;
let pontosTime2 = 0;

function atualizarPlacar() {
    document.getElementById('time1').textContent = pontosTime1;
    document.getElementById('time2').textContent = pontosTime2;
}

function resetar() {
    pontosTime1 = 0; 
    pontosTime2 = 0; 
    atualizarPlacar(); 
}

function Pontos1() {
    pontosTime1 += 1; 
    atualizarPlacar(); 
}

function Pontos2() {
    pontosTime1 += 2; 
    atualizarPlacar(); 
}

function Pontos3() {
    pontosTime1 += 3; 
    atualizarPlacar(); 
}

function Pontos1Time2() {
    pontosTime2 += 1; 
    atualizarPlacar(); 
}

function Pontos2Time2() {
    pontosTime2 += 2; 
    atualizarPlacar(); 
}

function Pontos3Time2() {
    pontosTime2 += 3; 
    atualizarPlacar(); 
}