const box = document.getElementById('square')
const copy = document.getElementById('copy-text')


function changeRadius(){
    const topLeft = document.getElementById('top-left').value 
    const topRight = document.getElementById('top-right').value
    const bottomLeft = document.getElementById('bottom-left').value
    const bottomRight = document.getElementById('bottom-right').value


    const valueStyle = box.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    
    return valueStyle
}

function copyText(){
    const boxCopy = document.createElement("boxCopy")
    valueStyle = changeRadius()
    console.log(valueStyle)
    navigator.clipboard.writeText(valueStyle)
        .then(() => alert("Copied"))
        .catch((e) => alert(`Copy failed ${e}`))
}
