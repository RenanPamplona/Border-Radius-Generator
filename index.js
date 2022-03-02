let mainBox = document.getElementById('box')
let code = document.getElementById('code')

function changeRadius() {
   let topLeftRadius = document.getElementById('top-left').value
   let topRightRadius = document.getElementById('top-right').value
   let bottomLeftRadius = document.getElementById('bottom-left').value
   let bottomRightRadius = document.getElementById('bottom-right').value

   mainBox.style.borderTopLeftRadius = `${topLeftRadius}px`
   mainBox.style.borderTopRightRadius = `${topRightRadius}px`
   mainBox.style.borderBottomLeftRadius = `${bottomLeftRadius}px`
   mainBox.style.borderBottomRightRadius = `${bottomRightRadius}px`

   updateCode(topLeftRadius, topRightRadius, bottomLeftRadius, bottomRightRadius)
}

function updateCode(topLeft, topRight, bottomLeft, bottomRight){
   code.innerHTML = `border-top-left-radius: ${topLeft}px;\n`
   code.innerHTML += `border-top-right-radius: ${topRight}px;\n`
   code.innerHTML += `border-bottom-left-radius: ${bottomLeft}px;\n`
   code.innerHTML += `border-bottom-right-radius: ${bottomRight}px;`
}

function copyCode(){
   navigator.clipboard.writeText(code.innerHTML).then(() => {
      alert("CSS copied to clipboard!")
   }).catch(() => {
      alert("Error")
   })
}