function convert() {
    const outputDecimal = document.getElementById('results')
    const binary = document.getElementById('binary').value
    
    if (binary === '' || binary === ' ') return alert('Please, insert a value')
    binary.split('').map(bit=>{
        if (bit !== '1' && bit !== '0') return alert('Please, only binary numbers')
    })
    const decimal = parseInt(binary, 2)

    outputDecimal.innerHTML = decimal

}