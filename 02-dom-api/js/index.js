
function addImageToHTML(pokemon){
    let image = new Image()
    image.src = 'images/' + pokemon.id + '.png'
    image.title = pokemon.name + " | " + pokemon.type
    document.body.appendChild(image)        
}


pokeDB.forEach(addImageToHTML)