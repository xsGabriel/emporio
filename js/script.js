// banco de dados com os livros e info corretas
const bancoDeLivros = {
    "ss1": { titulo: "Shadow Slave - Vol. 1: Child of Shadows", autor: "Guiltythree", preco: "R$ 89,90", edicao: "1", capa: "../IMG/livros/SS-book1.jpg", sinopse: "Sunny é um jovem que vive na pobreza e acaba sendo escolhido pelo Feitiço do Pesadelo.", paginas: "420", editora: "Empório Mágico", idioma: "Português", genero: "Dark Fantasy", acabamento: "Capa Dura", entrega: "📦 Entrega via Corvo em 3 dias." },
    "ss2": { titulo: "Shadow Slave - Vol. 2: Demon of Change", autor: "Guiltythree", preco: "R$ 99,90", edicao: "1", capa: "../IMG/livros/SS-book2.jpg", sinopse: "Agora como um Desperto, Sunny enfrenta a Cidade Sombria.", paginas: "480", editora: "Empório Mágico", idioma: "Português", genero: "Dark Fantasy", acabamento: "Capa Dura", entrega: "📦 Entrega via Corvo em 3 dias." },
    "lotr1": { titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: "J.R.R. Tolkien", preco: "R$ 59,90", edicao: "2", capa: "../IMG/livros/rings-book1.jpg", sinopse: "O início da jornada de Frodo para destruir o Um Anel.", paginas: "448", editora: "HarperCollins", idioma: "Português", genero: "Alta Fantasia", acabamento: "Brochura", entrega: "📦 Entrega via Águias em 5 dias." },
    "lotr2": { titulo: "O Senhor dos Anéis: As Duas Torres", autor: "J.R.R. Tolkien", preco: "R$ 59,90", edicao: "2", capa: "../IMG/livros/rings-book2.jpg", sinopse: "A sociedade se divide e a guerra começa a tomar conta da Terra Média.", paginas: "416", editora: "HarperCollins", idioma: "Português", genero: "Alta Fantasia", acabamento: "Brochura", entrega: "📦 Entrega via Águias em 5 dias." },
    "lotr3": { titulo: "O Senhor dos Anéis: O Retorno do Rei", autor: "J.R.R. Tolkien", preco: "R$ 64,90", edicao: "3", capa: "../IMG/livros/rings-book3.jpg", sinopse: "A batalha final por Minas Tirith e a conclusão da jornada.", paginas: "528", editora: "HarperCollins", idioma: "Português", genero: "Alta Fantasia", acabamento: "Brochura", entrega: "📦 Entrega via Águias em 5 dias." },
    "pj1": { titulo: "P.J. e os Olimpianos: O Ladrão de Raios", autor: "Rick Riordan", preco: "R$ 64,90", edicao: "1", capa: "../IMG/livros/percy-book1.jpg", sinopse: "Percy descobre que é um semideus filho de Poseidon.", paginas: "400", editora: "Intrínseca", idioma: "Português", genero: "Mitologia", acabamento: "Brochura", entrega: "📦 Entrega via Pégaso em 2 dias." },
    "pj2": { titulo: "P.J. e os Olimpianos: O Mar de Monstros", autor: "Rick Riordan", preco: "R$ 59,90", edicao: "1", capa: "../IMG/livros/percy-book2.jpg", sinopse: "O acampamento está em perigo e Percy precisa achar o Velocino de Ouro.", paginas: "304", editora: "Intrínseca", idioma: "Português", genero: "Mitologia", acabamento: "Brochura", entrega: "📦 Entrega via Pégaso em 2 dias." },
    "pj3": { titulo: "P.J. e os Olimpianos: A Maldição do Titã", autor: "Rick Riordan", preco: "R$ 59,90", edicao: "1", capa: "../IMG/livros/percy-book3.jpg", sinopse: "A deusa Ártemis sumiu e Percy precisa ajudar as caçadoras.", paginas: "336", editora: "Intrínseca", idioma: "Português", genero: "Mitologia", acabamento: "Brochura", entrega: "📦 Entrega via Pégaso em 2 dias." },
    "pj4": { titulo: "P.J. e os Olimpianos: A Batalha do Labirinto", autor: "Rick Riordan", preco: "R$ 64,90", edicao: "2", capa: "../IMG/livros/percy-book4.jpg", sinopse: "Cronos está voltando e o labirinto de Dédalo é o novo campo de batalha.", paginas: "392", editora: "Intrínseca", idioma: "Português", genero: "Mitologia", acabamento: "Brochura", entrega: "📦 Entrega via Pégaso em 2 dias." },
    "pj5": { titulo: "P.J. e os Olimpianos: O Último Olimpiano", autor: "Rick Riordan", preco: "R$ 69,90", edicao: "2", capa: "../IMG/livros/percy-book5.jpg", sinopse: "A profecia final se cumpre na batalha de Manhattan.", paginas: "384", editora: "Intrínseca", idioma: "Português", genero: "Mitologia", acabamento: "Brochura", entrega: "📦 Entrega via Pégaso em 2 dias." },
    "hp1": { titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", preco: "R$ 54,90", edicao: "1", capa: "../IMG/livros/harry-book1.jpg", sinopse: "O menino que sobreviveu descobre que é um bruxo.", paginas: "320", editora: "Rocco", idioma: "Português", genero: "Magia", acabamento: "Capa Dura", entrega: "📦 Entrega via Coruja em 1 dia." },
    "hp2": { titulo: "Harry Potter e a Câmara Secreta", autor: "J.K. Rowling", preco: "R$ 54,90", edicao: "1", capa: "../IMG/livros/harry-book2.jpg", sinopse: "Algo terrível foi liberado em Hogwarts.", paginas: "288", editora: "Rocco", idioma: "Português", genero: "Magia", acabamento: "Capa Dura", entrega: "📦 Entrega via Coruja em 1 dia." },
    "hp3": { titulo: "Harry Potter e o Prisioneiro de Azkaban", autor: "J.K. Rowling", preco: "R$ 59,90", edicao: "1", capa: "../IMG/livros/harry-book3.jpg", sinopse: "Um prisioneiro perigoso fugiu e está vindo atrás de Harry.", paginas: "348", editora: "Rocco", idioma: "Português", genero: "Magia", acabamento: "Capa Dura", entrega: "📦 Entrega via Coruja em 1 dia." },
    "hp4": { titulo: "Harry Potter e o Cálice de Fogo", autor: "J.K. Rowling", preco: "R$ 74,90", edicao: "2", capa: "../IMG/livros/harry-book4.jpg", sinopse: "O torneio tribruxo traz perigos mortais.", paginas: "584", editora: "Rocco", idioma: "Português", genero: "Magia", acabamento: "Capa Dura", entrega: "📦 Entrega via Coruja em 1 dia." },
    "hp5": { titulo: "Harry Potter e a Ordem da Fênix", autor: "J.K. Rowling", preco: "R$ 84,90", edicao: "2", capa: "../IMG/livros/harry-book5.jpg", sinopse: "A resistência contra o retorno de Voldemort começa.", paginas: "796", editora: "Rocco", idioma: "Português", genero: "Magia", acabamento: "Capa Dura", entrega: "📦 Entrega via Coruja em 1 dia." },
    "hp6": { titulo: "Harry Potter e o Enigma do Príncipe", autor: "J.K. Rowling", preco: "R$ 74,90", edicao: "3", capa: "../IMG/livros/harry-book6.jpg", sinopse: "O passado de Voldemort é revelado.", paginas: "512", editora: "Rocco", idioma: "Português", genero: "Magia", acabamento: "Capa Dura", entrega: "📦 Entrega via Coruja em 1 dia." },
    "hp7": { titulo: "Harry Potter e as Relíquias da Morte", autor: "J.K. Rowling", preco: "R$ 79,90", edicao: "3", capa: "../IMG/livros/harry-book7.jpg", sinopse: "A batalha final pelo mundo bruxo.", paginas: "592", editora: "Rocco", idioma: "Português", genero: "Magia", acabamento: "Capa Dura", entrega: "📦 Entrega via Coruja em 1 dia." }
};

// ==========================================
// LOGICA DA TELA DE PRODUTO
// ==========================================
const parametrosUrl = new URLSearchParams(window.location.search);
const idDoLivro = parametrosUrl.get('id');
const livroSelecionado = bancoDeLivros[idDoLivro];

if (livroSelecionado) {
    document.getElementById('livro-capa').src = livroSelecionado.capa;
    document.getElementById('livro-titulo').innerHTML = livroSelecionado.titulo;
    document.getElementById('livro-autor').innerHTML = livroSelecionado.autor;
    document.getElementById('livro-edicao').innerHTML = livroSelecionado.edicao; 
    document.getElementById('livro-preco').innerHTML = livroSelecionado.preco;
    document.getElementById('livro-sinopse').innerHTML = livroSelecionado.sinopse;
    document.getElementById('livro-paginas').innerHTML = livroSelecionado.paginas;
    document.getElementById('livro-editora').innerHTML = livroSelecionado.editora;
    document.getElementById('livro-idioma').innerHTML = livroSelecionado.idioma;
    document.getElementById('livro-genero').innerHTML = livroSelecionado.genero;
    document.getElementById('livro-acabamento').innerHTML = livroSelecionado.acabamento;
    document.getElementById('livro-entrega').innerHTML = livroSelecionado.entrega;

    // muda o comportamento do botao de comprar pra salvar na memoria antes de ir pro carrinho
    let btnCompra = document.querySelector('.botao-compra');
    if(btnCompra) {
        btnCompra.onclick = function(e) {
            e.preventDefault(); // cancela o link padrao
            adicionarAoCarrinho(idDoLivro);
            window.location.href = "carrinho.html"; // redireciona depois de salvar
        }
    }
}


// ==========================================
// LOGICA DO CARRINHO COM LOCALSTORAGE (SISTEMA DINAMICO)
// ==========================================

// salva o id do livro no localstorage
function adicionarAoCarrinho(id) {
    let carrinhoStorage = JSON.parse(localStorage.getItem('emporioCarrinho')) || [];
    let index = carrinhoStorage.findIndex(item => item.id === id);
    
    // se o livro ja ta no carrinho, aumenta a quantidade. se nao, adiciona.
    if (index > -1) {
        carrinhoStorage[index].qtd += 1;
    } else {
        carrinhoStorage.push({id: id, qtd: 1});
    }
    localStorage.setItem('emporioCarrinho', JSON.stringify(carrinhoStorage));
}

// le o storage e monta as tags tr e td dinamicamente
function renderizarCarrinho() {
    let corpoCarrinho = document.getElementById('corpo-carrinho');
    if (!corpoCarrinho) return; // roda so se estiver na pagina do carrinho

    let carrinhoStorage = JSON.parse(localStorage.getItem('emporioCarrinho')) || [];
    corpoCarrinho.innerHTML = ''; // limpa a tabela antes de preencher

    let freteElem = document.getElementById('valor-frete');
    let taxaElem = document.getElementById('valor-taxa');
    let totalElem = document.getElementById('total-compra');

    // se o carrinho tiver vazio
    if (carrinhoStorage.length === 0) {
        corpoCarrinho.innerHTML = `<tr><td colspan="6" align="center" style="padding: 40px; color: #b3b3b3;">Seu carrinho está vazio. Explore o Acervo para invocar relíquias!</td></tr>`;
        freteElem.innerText = 'R$ 0,00';
        taxaElem.innerText = 'R$ 0,00';
        totalElem.innerText = 'R$ 0,00';
        return;
    }

    let totalProdutos = 0;

    // laco de repeticao q monta cada linha de livro
    carrinhoStorage.forEach((item) => {
        let livro = bancoDeLivros[item.id];
        if(!livro) return;

        let precoNum = parseFloat(livro.preco.replace('R$ ', '').replace(',', '.'));
        let subtotal = precoNum * item.qtd;
        totalProdutos += subtotal;

        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td align="center"><img src="${livro.capa}" class="foto-item-carrinho" alt="Capa"></td>
            <td valign="middle">${livro.titulo}</td>
            <td align="center">
                <input type="number" class="input-qtd" value="${item.qtd}" min="1" onchange="mudarQtd('${item.id}', this.value)">
            </td>
            <td align="center" class="preco-unitario">${livro.preco}</td>
            <td align="center" class="subtotal-item">R$ ${subtotal.toFixed(2).replace('.', ',')}</td>
            <td align="center">
                <button class="botao btn-remover" onclick="removerDoCarrinho('${item.id}')">Excluir</button>
            </td>
        `;
        corpoCarrinho.appendChild(tr);
    });

    // calcula as taxas e atualiza o tfoot (rodape)
    let taxasFixas = 20.00; // 15 de frete + 5 arcana
    let totalFinal = totalProdutos + taxasFixas;

    freteElem.innerText = 'R$ 15,00';
    taxaElem.innerText = 'R$ 5,00';
    totalElem.innerText = 'R$ ' + totalFinal.toFixed(2).replace('.', ',');
}

// atualiza a quantidade de um livro q ja ta no carrinho
function mudarQtd(id, novaQtd) {
    let carrinhoStorage = JSON.parse(localStorage.getItem('emporioCarrinho')) || [];
    let index = carrinhoStorage.findIndex(item => item.id === id);
    if (index > -1) {
        carrinhoStorage[index].qtd = parseInt(novaQtd) || 1;
        localStorage.setItem('emporioCarrinho', JSON.stringify(carrinhoStorage));
        renderizarCarrinho(); // regera a tabela
    }
}

// apaga o livro do carrinho
function removerDoCarrinho(id) {
    let carrinhoStorage = JSON.parse(localStorage.getItem('emporioCarrinho')) || [];
    carrinhoStorage = carrinhoStorage.filter(item => item.id !== id);
    localStorage.setItem('emporioCarrinho', JSON.stringify(carrinhoStorage));
    renderizarCarrinho(); // regera a tabela
}

// evita do cara ir pro pagamento se o carrinho tiver vazio
function verificarCheckout(event) {
    let carrinhoStorage = JSON.parse(localStorage.getItem('emporioCarrinho')) || [];
    if (carrinhoStorage.length === 0) {
        event.preventDefault();
        alert('Seu carrinho está vazio! Adicione algum livro antes de prosseguir para o pagamento.');
    }
}


// ==========================================
// LOGICA DO TESTE DE AFINIDADE (QUIZ)
// ==========================================
function processarTeste() {
    const form = document.getElementById('quiz-magico');
    const dados = new FormData(form);
    
    let contagem = { ss: 0, lotr: 0, pj: 0, hp: 0 };
    
    for (let i = 1; i <= 3; i++) {
        let resp = dados.get('p' + i);
        if (resp) contagem[resp]++;
    }

    let vencedor = Object.keys(contagem).reduce((a, b) => contagem[a] > contagem[b] ? a : b);
    
    const sagas = {
        ss: { nome: "Shadow Slave", desc: "Sua alma pertence às sombras. Você é um sobrevivente nato." },
        lotr: { nome: "O Senhor dos Anéis", desc: "Sua alma é nobre e antiga. Você valoriza a honra." },
        pj: { nome: "Percy Jackson", desc: "O sangue dos deuses corre em suas veias. Movido pela ação." },
        hp: { nome: "Harry Potter", desc: "A magia acadêmica é o seu lar. Estrategista nato." }
    };

    const resultadoDiv = document.getElementById('resultado-teste');
    document.getElementById('nome-saga').innerText = sagas[vencedor].nome;
    document.getElementById('desc-saga').innerText = sagas[vencedor].desc;
    
    resultadoDiv.style.display = 'block';
    window.scrollTo({ top: resultadoDiv.offsetTop, behavior: 'smooth' });
}

// Inicia o renderizador do carrinho logo q a pagina carrega
window.onload = renderizarCarrinho;