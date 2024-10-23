/*
  01

  - Obtenha a ul do index.html e adicione em todos os elementos filhos dela,  
    uma classe 'video';
  - Exiba no console os elementos filhos da ul com a classe já inserida.
*/


// Eduardo Krummenauer
const ul = document.querySelector('ul')

Array.from(ul.children).forEach(video => {
  video.classList.add('video')
})

// ---------------------------------------------------------------
// Professor Roger Melo

const elementUl = document.querySelector('.videos')
const elementLis = Array.from(ul.children)

const insertVideoClass = li => {
  li.classList.add('video')
}

elementLis.forEach(insertVideoClass)

console.log(elementLis)

/*
  02

  - Usando a propriedade adequada, descubra quem é o elemento pai do h2
    e exiba-o no console;
*/

const elementParent = document.querySelector('h2')

console.log(elementParent.parentElement)

/*
  03

  - Descubra quem é o próximo elemento irmão do h1 e exiba-o no console;
*/

const elementH1 = document.querySelector('h1')

console.log(elementH1.nextElementSibling)

/*
  04

  - Descubra quem é o irmão anterior da ul e exiba-o no console;
*/

const parentUl = document.querySelector('ul')

console.log(parentUl.previousElementSibling)

/*
  05

  - Quando um clique acontecer em alguma das lis, faça com que a li clicada seja  
    exibida no console.
*/

const lis = document.querySelectorAll('li')

lis.forEach(li => {
  li.addEventListener('click', event => {
    console.log(event.target)
  })
})

/*
  06

  - Quando o botão for clicado, adicione o nome dos vídeos abaixo dentro da ul;
  - Cada nome deve estar dentro de uma li.
*/

const videos = [{
  name: 'Como o promise all funciona | JavaScript',
  length: '00:01:52'
}, {
  name: 'Como refatorar um for loop | JavaScript',
  length: '00:04:18'
}, {
  name: 'Como fazer requisições HTTP com o método fetch | JavaScript',
  length: '00:02:55'
}]

const addButton = document.querySelector('button')

addButton.addEventListener('click', () => {
 videos.forEach(video => {
    ul.innerHTML += `<li>${video.name}</li>`
 })
})

/*
  07

  - Se um clique no h1 acontecer, faça com que todos os elementos dentro do body 
    sejam removidos.
*/

const removeInClick = document.querySelectorAll('body')

removeInClick.forEach(h1 => {
  h1.addEventListener('click', event => {
    const clickedElementRemove = event.target

    clickedElementRemove.remove()
  })
})