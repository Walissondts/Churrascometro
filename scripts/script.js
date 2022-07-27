// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por Pessoa + de 6 horas - 2000
// Refrigerante - 1000 por Pessoa + de 6 horas - 1500

// crianças valem por 0,5
// adultos valem por 1
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
console.log(inputAdultos)
console.log(inputCriancas)
console.log(inputDuracao)
let resultado = document.getElementById("resultado");

    function calcular() {
        console.log("calculando...")
        let adultos = inputAdultos.value;
        let criancas = inputCriancas.value
        let duracao = inputDuracao.value;

        let qtdTotalCarne = carnePP(duracao) * adultos + (criancas * carnePP(duracao) * 0.5);
        let qtdTotalCerveja = adultos * cervejaPP(duracao);
        let qtdTotalBebida = adultos * bebidaPP(duracao) + (criancas * bebidaPP(duracao) * 0.5);

        resultado.innerHTML = `<p>${qtdTotalCarne/1000} kg de Carne</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida/2000)} Pet's 2l de Bebidas</p>`
    }


function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else { 
        return 400;
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 1200;
    } else { 
        return 2000;
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1000;
    } else { 
        return 1500;
    }
}