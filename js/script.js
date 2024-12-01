// VALORES NO DISPLAY
const insert = (n) => {
    const valorDisplay = document.querySelector("#resultado").value;
    document.querySelector("#resultado").value = valorDisplay + n

}

// ALL CLEAR
const deleteAC = () => {
    document.querySelector("#resultado").value = ""
}

// if(document.querySelector("#resultado").value === "") {
//     document.querySelector("#btn-delete").innerHTML = "C"
// }


// BACK
const backSpace = () => {
    const valor = document.querySelector("#resultado").value;
    document.querySelector("#resultado").value = valor.substring(0, valor.length - 1)
}

// BACK-PRESS
const btn = document.querySelector("#back-btn")
let intervalo

btn.addEventListener("mousedown", () => {
    intervalo = setInterval(() => {
        backSpace()
    }, 100)
})

btn.addEventListener('mouseup', () => {
    clearInterval(intervalo)
})

btn.addEventListener('mouseleave', () => {
    clearInterval(intervalo)
})

// CALCULOS (=)
const calcular = () => {
    const valorDisplay = document.querySelector("#resultado").value;
    // SUBSTITUIÇÃO DO * POR "x" ANTES DE INCOCAR O eval()
    const expression = valorDisplay.replace(/x/g, "*")

    /* TRY PARA CAPTURAR ERROS DURANTE A EXECUÇÃO DO CÓDIGO E EVITAR QUE A APLICAÇÃO PARA DE EXECUTAR
    + CASO A EXPRESSÃO INSERIDA PELO O USUÁRIO FOR INVÁLIDA, RETORNARÁ UM ERRO DE SINTAXE > IMPEDINDO QUEBRA DE CÓDIGO  */
    try {
        document.querySelector("#resultado").value = eval(expression)
    } catch (e) {
        document.querySelector("#resultado").value = "Error"
    }

}

// +/-
const inverso = () => {
    const valorDisplay = document.querySelector("#resultado").value
    document.querySelector("#resultado").value = valorDisplay * -1
}

// TESTE > 0
