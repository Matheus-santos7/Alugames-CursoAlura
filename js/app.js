// Definindo uma função chamada alterarStatus que recebe um parâmetro id
function alterarStatus(id){
    let gamerclicado = document.getElementById(`game-${id}`);                 // Obtém o elemento HTML com o ID correspondente ao id passado para a função
    let imagem = gamerclicado.querySelector('.dashboard__item__img');        // Obtém o elemento filho de gamerclicado que possui a classe CSS .dashboard__item__img
    let botao = gamerclicado.querySelector('.dashboard__item__button');     // Obtém o elemento filho de gamerclicado que possui a classe CSS .dashboard__item__button

    // Verifica se a imagem tem a classe CSS dashboard__item__img--rented
    if (imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');        // Remove a classe CSS dashboard__item__img--rented da imagem
        botao.classList.remove('dashboard__item__button--return');     // Remove a classe CSS dashboard__item__button--return do botão
        botao.textContent = 'Alugar';                                 // Altera o texto do botão para 'Alugar'
    } else {
        // Se a imagem não tem a classe CSS dashboard__item__img--rented, executa este bloco de código
        imagem.classList.add('dashboard__item__img--rented');      // Adiciona a classe CSS dashboard__item__img--rented à imagem
        botao.classList.add('dashboard__item__button--return');   // Adiciona a classe CSS dashboard__item__button--return ao botão
        botao.textContent = 'Devolver';                          // Altera o texto do botão para 'Devolver'
    }
}
