/* 
  01

  - Insira apenas o css do bootstrap no index.html.
*/
// OK
/* 
  02

  - Após um segundo e meio do carregamento da página, exiba no console a  
    mensagem "Um segundo e meio se passaram desde que a página foi carregada".
*/

setTimeout( () => {
  console.log('Um segundo e meio se passaram desde que a página foi carregada')
}, 1500)

/* 
  03

  - Faça o contador do index.html funcionar;
  - O clique no botão "Parar contador" deve fazer com que o contador exiba 0.
*/

const counterContainer = document.querySelector('.counter-container')
const startButton = document.querySelector('.button-init-counter')
const stopButton  = document.querySelector('.button-stop-counter')

let counter = 0
let intervalId


// Função para iniciar o contador
function startCounter() {
    intervalId = setInterval(() => {
        counterContainer.textContent = ++counter
    }, 1000) // Incrementa o contador a cada 1 segundo (1000ms)
}

// Função para parar o contador e redefinir para 0
function stopCounter() {
    clearInterval(intervalId) // Para o intervalo
    counterContainer.textContent = 0 // Atualiza o display
}

// Adicionando eventos de clique aos botões
startButton.addEventListener('click', startCounter)
stopButton.addEventListener('click', stopCounter)


/* 
  04

  - A partir deste exercício, vamos voltar a trabalhar na sua versão do Quiz =D
  - Adicione mais 2 alternativas em cada pergunta do quiz.
*/

// OK

/* 
  05

  - Modifique a ordem das alternativas corretas. Ou seja, faça com que a  
    alternativa correta das perguntas não seja apenas a alternativa "B".
*/
// OK
/* 
  06

  - Refatore o código.
  
  Dicas: 
    - Primeiro, quebre o código da função de callback de envio do form em  
      funções isoladas;
    - Depois, cuide da legibilidade das funções.
*/

/* 
  07

  O exercício agora é considerarmos fazer dessa aplicação uma peça do seu 
  portfólio.

  Se você conseguiu executar o exercício da aula passada, especialmente sem ter  
  que rever partes da aula, ou seja, se você sente que desenvolveu a sua versão  
  do quiz por conta própria, considere inserí-la como parte de seu portfólio.

  Caso contrário, reveja as aulas e treine novamente até que você consiga 
  desenvolver a aplicação sozinho(a).

  A ideia é: considere inserir a sua versão do quiz em seu portifólio apenas se 
  você sente que *aprendeu* a desenvolvê-la.

  Se você ainda não tem um site próprio para hospedar os arquivos da aplicação, 
  você pode hospedá-la no Netlify seguindo este tutorial: 
  https://www.youtube.com/playlist?list=PLlAbYrWSYTiMGMxQf9JSoZUU1rgVpGPth
*/
