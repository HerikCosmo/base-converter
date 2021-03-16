function converter(){
    let numBinario = document.getElementById('numeroBinario').value
    let numDecimal = document.getElementById('numeroDecimal')

    if(numBinario == '') return alert('Insira um valor binário')
    numBinario.split('').forEach(numero => {
        if(numero !== '0' && numero !== '1') return alert('Apenas 0 ou 1')
    })

    numDecimal.value = parseInt(numBinario, 2)
}
