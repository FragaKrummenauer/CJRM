/*
  01

  - Ordene o array de strings abaixo em ordem alfabética;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

// Eduardo Krummenauer
// Modificando o array original
const names = ['Caio', 'André', 'Dário']
names.sort()
console.log(names)
// --------------------------------------------------
// Professor Roger Melo
// Gerado uma cópia sem alterar o array original

const namesCopy = names.map ( item => item ).sort() 
console.log(namesCopy)

/*
  02

  - Ordene, de forma crescente, os objetos do array abaixo baseado em seus id's;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

const characters = [
  { id: 03, name: 'Simba' },
  { id: 02, name: 'Nala' },
  { id: 01, name: 'Scar' },
  { id: 04, name: 'Mufasa' }
]
// Eduardo Krummenauer 
// Modificando o array original

characters.sort( ( character1, character2 ) => character1.id - character2.id )

console.log(characters)
// ------------------------------------------------------------------------------
// Professor Roger Melo
// Gerado uma cópia sem alterar o array original

const charactersCopy = characters.map ( item => ({ id: item.id, name: item.name }) )

charactersCopy.sort((item2, item1) => item2.id - item1.id)
console.log(charactersCopy)


/*
  03

  - Ordene o array de números abaixo de forma crescente;
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/
// Eduardo Krummenauer
// Modificando o array original

const numbers = [41, 15, 63, 349, 25, 22, 143, 64, 59, 291]
numbers.sort( (number1, number2 ) => number1 - number2 )
console.log(numbers)
// ---------------------------------------------------------------
// Professor Roger Melo
// Gerando uma cópia sem alterar o array original

const numbersCopy = numbers.map ( item => item )

numbersCopy.sort( (item2, item1) => item2 - item1 )
console.log(numbersCopy)

/*
  04

  - Encontre e exiba no console o 1º item maior que 50 do array abaixo.
*/

// Eduardo Krummenauer
// Utilizando Filter()
const randomNumbers = [10, 5, 0, 40, 60, 10, 20, 70]

const greaterThan50 = randomNumbers.filter (number => number > 50 )
console.log(greaterThan50[0])
// -------------------------------------------------------------------
// Professor Roger Melo
// Utilizando Find()

const numberGreaterThan50 = randomNumbers.find ( number => number > 50 )
console.log( numberGreaterThan50 )

/*
  05

  - Ordene o array de strings abaixo em ordem alfabética-invertida (Z-A);
  - Não modifique o array original;
  - Exiba o array ordenado no console.
*/

// Eduardo Krummenauer
// Modificando o array original
const people = ['Cauã', 'Alfredo', 'Bruno']

people.sort( ( name1, name2 ) => {
  if ( name1 > name2 ) {
    return -1
  }
})
console.log( people )
// -------------------------------------------------------
// Professor Roger Melo
// Gerando uma cópia sem alterar o array original

const peopleInReverseAlphabeticalOrder = people.map( item => item).sort().reverse()


console.log(peopleInReverseAlphabeticalOrder)

/*
  06
  
  - Através do array abaixo, gere a mensagem "vinho cozido, tomate cozido, 
    cebola cozida, cogumelo cozido";
  - Exiba a string no console.
*/
// Eduardo Krummenauer
// Utilizando Map() e Reduce()
const ingredients = ['vinho', 'tomate', 'cebola', 'cogumelo']

const namesIngredients = ingredients.map( ingredient  => `${ingredient} cozido` )
namesIngredients[2] = namesIngredients[2].replace('cozido', 'cozida')

const resultIngredient = namesIngredients.join(', ')
 
console.log(resultIngredient)
// --------------------------------------------------------------------------------------
// Professor Roger Melo
// Utilizando Reduce()
// Este método substituirá todas as palavras que finalizar com 'a' e o 'cozido' se tornará 'cozida' 

const cookedIngredients = ingredients.reduce( (acc, item, index, array) => {
  const correctWordGender = /a$/.test(item) ? 'cozida' : 'cozido'
  const isLastItem = index === array.length - 1
  const ingredientMessage = acc + `${item} ${correctWordGender}`

  return isLastItem ? ingredientMessage : `${ingredientMessage}, `
}, '')

console.log(cookedIngredients)

/*
  07
  
  - À partir do array abaixo, obtenha e exiba no console o total de pessoas que 
    assistiram apenas os filmes da Disney.
*/

const topBrazilMovies = [
  { title: 'Vingadores: Ultimato', peopleAmount: 19686119, distributedBy: 'Disney' },
  { title: 'Titanic', peopleAmount: 17050000, distributedBy: 'Paramount / 20th Century' },
  { title: 'O Rei Leão', peopleAmount: 16267649, distributedBy: 'Disney' },
  { title: 'Vingadores: Guerra Infinita', peopleAmount: 14572181, distributedBy: 'Disney' },
  { title: 'Tubarão', peopleAmount: 13035000, distributedBy: 'Universal' },
  { title: 'Nada a Perder', peopleAmount: 11944985, distributedBy: 'Paris Filmes' },
  { title: 'Os Dez Mandamentos', peopleAmount: 11259536, distributedBy: 'Paris / Downtown Filmes' },
  { title: 'Tropa de Elite 2', peopleAmount: 11204815, distributedBy: 'Zazen' },
  { title: 'Os Vingadores', peopleAmount: 10968065, distributedBy: 'Disney' },
  { title: 'Dona Flor e Seus Dois Maridos', peopleAmount: 10735524, distributedBy: 'Embrafilme' }
]

const moviesDisney =  topBrazilMovies
.filter( ({ distributedBy }) => distributedBy === 'Disney')
.reduce( ( acc, { peopleAmount } ) => acc + peopleAmount, 0)

console.log(moviesDisney)


/*
  08
  
  - Considerando o array abaixo, gere um array de cães;
  - Os cães, ao invés da idade original, devem conter sua "idade humana";
    - Algumas pessoas dizem que 1 ano de um cachorro equivale à 7 anos de uma 
      pessoa. Cientificamente, não é tão simples assim, mas para fins didáticos,  
      se baseie nessa informação para fazer o cálculo.
  - Exiba no console o array dos cães com as idades convertidas.
*/

const pets = [
  { name: 'Boris', age: 4, gender: 'Male', type: 'Dog' },
  { name: 'Jimmy', age: 1, gender: 'Male', type: 'Cat' },
  { name: 'Pérola', age: 2, gender: 'Female', type: 'Dog' },
  { name: 'Lucy', age: 5, gender: 'Female', type: 'Cat' },
  { name: 'Cristal', age: 3, gender: 'Female', type: 'Dog' },
  { name: 'Chico', age: 6, gender: 'Male', type: 'Dog' }
]

const dogs = pets
  .filter( ( { type }) => type === 'Dog')
  .map(({ name, age, gender, type }) => ({ name, age: age * 7, gender, type }))

console.log(dogs);

/*
  09
  
  - Considerando o array  topBrazilMovies, através do map ou do reduce, insira 
    os nomes dos filmes na ul do index.html.
*/

// Eduardo Krummenauer
// Utilizando o método Map()
 const movieList = document.querySelector('.list-group')

  topBrazilMovies.map( movie => {
  const listItem = document.createElement('li')
  listItem.textContent = movie.title
  movieList.appendChild(listItem)
 })
// --------------------------------------------------------------
// Professor Roger Melo
// Utilizando o método Reduce()
const movieNames = topBrazilMovies
  .reduce( (acc, { title }) => acc + `<li>${title}`, '')

  movieList.innerHTML = movieNames


/*
  10
  
  - Na sua versão do Quiz, teste se ao enviar o form pela 2ª vez consecutiva, a 
    pontuação do envio anterior é contabilizada;
  - Exemplo: exibe 100% no 1º envio e 200% no 2º envio (sem modificar as 
    alternativas entre os envios);
    - Se isso está acontecendo, proponha uma solução para que o 2º submit não 
      considere a pontuação do envio anterior.
*/

