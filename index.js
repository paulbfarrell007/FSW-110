var newListItem = document.createElement('li')
newListItem.textContent = '3'
var myList = document.getElementById('my-list')
myList.appendChild(newListItem)

var newP = document.createElement('p')
newP.textContent = 'Bryan Uni ROCKS!!!!'
newP.style.textAlign = 'center'
newP.style.fontSize = '30px'
document.body.appendChild(newP)