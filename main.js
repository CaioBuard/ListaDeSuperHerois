function buscarHerois(){

    const request = new XMLHttpRequest()
    request.open("GET", "https://akabab.github.io/superhero-api/api/all.json", false)
    request.send()

    let listaHerois = JSON.parse(request.responseText)
    for(let index = 0 ; index < listaHerois.length; index ++){
        const heroi = listaHerois[index]
        const id = index + 1
        AdicionarCardHerois(heroi)
    }
}


function AdicionarCardHerois(heroi){
    
    const divElemento = document.getElementById("lista-herois")
    
    const divCardElemento = document.createElement("div")
    divCardElemento.classList.add("card")

    const imagemElemento = document.createElement("img")
    imagemElemento.setAttribute("src", heroi.images.lg)
    imagemElemento.style.width="100%"

    const textoElemento = document.createElement("h1")
    textoElemento.innerHTML = heroi.name

    divCardElemento.appendChild(imagemElemento)
    divCardElemento.appendChild(textoElemento)

    divElemento.appendChild(divCardElemento)
}