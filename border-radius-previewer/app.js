const box = document.getElementById('square')
const copy = document.getElementById('copy-text')


function changeRadius(){
    // console.log(box)
    const topLeft = document.getElementById('top-left').value 
    const topRight = document.getElementById('top-right').value
    const bottomLeft = document.getElementById('bottom-left').value
    const bottomRight = document.getElementById('bottom-right').value

    // console.log(topLeft)

    const valueStyle = box.style.borderRadius = `${topLeft}px ${topRight}px ${bottomRight}px ${bottomLeft}px`
    
    return valueStyle
}

// const valueResult
function copyText(){
    const boxCopy = document.createElement("boxCopy")
    valueStyle = changeRadius()
    console.log(valueStyle)
    navigator.clipboard.writeText(valueStyle)
        .then(() => alert("Copied"))
        .catch((e) => alert(`Copy failed ${e}`))
}
