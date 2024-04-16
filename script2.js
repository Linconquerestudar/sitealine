const caixaDeMarcacao = document.getElementById('caixaDeMarcacao');
const meuBotao = document.getElementById('meuBotao');

// Adiciona um ouvinte de evento para a caixa de marcação
caixaDeMarcacao.addEventListener('change', function() {
    // Habilita o botão se a caixa de marcação estiver marcada, senão desabilita
    meuBotao.disabled = !this.checked;
});
