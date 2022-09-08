let listaPainting = [
    {
        categoria: 'Paintings',
        imagem: '.assets/img/painting/clock.jpg',
        nome: 'Relógio Smart',
        preco: 'R$ 497.00'
    },
    {
        categoria: 'Paintings',
        imagem: '.assets/img/painting/gamepad.jpg',
        nome: 'Controle ps5',
        preco: 'R$ 250.00'
    },
    {
        categoria: 'Paintings',
        imagem: '.assets/img/painting/personagem.jpg',
        nome: 'Mr. Robot',
        preco: 'R$ 12500.00'
    }
]

let listaActionFigure = [
    {
        categoria: 'Action Figure',
        imagem: '.assets/img/actions/animewoman.jpg',
        nome: 'Garota',
        preco: 'R$ 1.99'
    },
    {
        categoria: 'Action Figure',
        imagem: '.assets/img/actions/dragonballpersonagem.jpg',
        nome: 'Goku',
        preco: 'R$ 49.90'
    },
    {
        categoria: 'Action Figure',
        imagem: '.assets/img/actions/starwarspersonagem.jpg',
        nome: 'Baby Yoda',
        preco: 'R$ 39.90'
    }
]

function createActionItem(categoria, imagem, nome, preco){
    if(categoria == 'Action Figure'){
        let objeto = {
            categoria: categoria,
            imagem: imagem,
            nome: nome,
            preco: preco
        }
        listaActionFigure.push(objeto)
        return objeto
    }
}
createActionItem()

function createPaintingIem(categoria, imagem, nome, preco){
    if(categoria == 'Paintings'){
        let objeto = {
            categoria: categoria,
            imagem: imagem,
            nome: nome,
            preco: preco
        }
        listaPainting.push(objeto)
        return objeto
    }
}
createPaintingIem()
let secaoListaPainting = document.getElementsByClassName('paint')
let secaoListaFigure = document.getElementsByClassName('action')

for(let i = 0; i < listaPainting.length; i++){

    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('p')
    let preco = document.createElement('span')

    imagem.src = listaPainting[i].imagem
    nome.innerText = listaPainting[i].nome
    preco.innerText = listaPainting[i].preco
    elementoLista.append(imagem, nome, preco)
    secaoListaPainting[0].appendChild(elementoLista)
}

for(let i = 0; i < listaActionFigure.length; i++){
  
    let elementoLista = document.createElement('li')
    let imagem = document.createElement('img')
    let nome = document.createElement('p')
    let preco = document.createElement('span')


    imagem.src = listaActionFigure[i].imagem
    nome.innerText = listaActionFigure[i].nome
    preco.innerText = listaActionFigure[i].preco
    elementoLista.append(imagem, nome, preco)
    secaoListaFigure[0].appendChild(elementoLista)
}