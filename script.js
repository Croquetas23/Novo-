function selecionarBotao(botao) {
    let botoes = document.querySelectorAll('.botao');
    botoes.forEach(btn => btn.classList.remove('selecionado'));
    botao.classList.add('selecionado');
}
