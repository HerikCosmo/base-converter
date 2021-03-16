function converter(){
    let numBinario = document.getElementById('numeroBinario')
    let numDecimal = document.getElementById('numeroDecimal')

    if(numBinario.value == '') return alert('Insira um valor binário')

    const numeros = numBinario.value.split('')
    let teste = true

    numeros.forEach(numero => {
        if(numero !== '0' && numero !== '1') teste = false
    })

    if(teste){
        numDecimal.value = parseInt(numBinario.value, 2) 
    }else{
        alert('apenas 0 ou 1')
        numBinario.value = ''
        numDecimal.value = ''
    }   
    
}
