function gerarStringAleatoria(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let resultado = '';

    for (let i = 0; i < tamanho; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        resultado += caracteres[indice];
    }

    return resultado;
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://127.0.0.1:5500/cadastrar-produto.html')

        const nomeProduto = gerarStringAleatoria(10);
        const precoProduto = gerarNumeroAleatorio(1, 100);
        const quantidadeProduto = gerarNumeroAleatorio(1, 100);

        cy.get('#produtoNome').type(nomeProduto);
        cy.get('#produtoPreco').type(precoProduto);
        cy.get('#produtoQuant').type(quantidadeProduto);

        cy.get('#btn-cadastrar-produto').click();

        cy.url().should('include', 'listar-produtos.html');
        cy.get('.list-group-item').should('contain', nomeProduto);
    });
});
