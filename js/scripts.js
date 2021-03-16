function converter(){
    let numBinario = document.getElementById('numeroBinario')
    let numDecimal = document.getElementById('numeroDecimal')

    if(numBinario.value == '') return alert('Insira um valor binário')

    const numeros = numBinario.value.split('')
    let validar = true

    numeros.forEach(numero => {
        if(numero !== '0' && numero !== '1') validar = false
    })

    if(validar){
        numDecimal.value = parseInt(numBinario.value, 2) 
    }else{
        alert('apenas 0 ou 1')
        numBinario.value = ''
        numDecimal.value = ''
    }   
    
}
