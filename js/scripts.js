document.getElementById('botao').addEventListener("click", function() {
    numDec = document.getElementById('numeroDecimal')
    numBinario = document.getElementById('numeroBinario').value
    binToDec(numBinario)
})

function binToDec(numero){
    if(numero){
        console.log(numero)
        numDec.value = parseInt(numero, 2)
    }else{
        numDec.value = ''
    }
    
}

