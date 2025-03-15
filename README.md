# challengeAmigoSecreto

Este projeto é um desafio de criação de um site para realizar sorteios de amigo secreto. O objetivo do projeto é permitir que o usuário adicione nomes à lista e, em seguida, faça o sorteio para descobrir quem será o amigo secreto de cada pessoa.

## Tecnologias Utilizadas

- **HTML5**: Estruturação da página.
- **CSS3**: Estilos e layout.
- **JavaScript**: Funcionalidades dinâmicas para interação com o usuário.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

### 1. **Pasta `/assets`**
A pasta `assets` contém todos os arquivos de mídia e código utilizados no site, organizados da seguinte maneira:

- **`/css`**: Contém o arquivo de estilos CSS.
    - `style.css`: Arquivo responsável pela formatação visual do site (cores, fontes, layout).

- **`/html`**: Contém o arquivo principal da página HTML.
    - `index.html`: Arquivo HTML que estrutura a página inicial com campos de entrada de nomes e o botão para realizar o sorteio.

- **`/images`**: Contém as imagens utilizadas no site.
    - `amigo-secreto.png`: Imagem representativa do site (banner).
    - `play_circle_outline.png`: Ícone utilizado no botão para realizar o sorteio.

- **`/js`**: Contém o arquivo JavaScript.
    - `app.js`: Arquivo JavaScript que contém a lógica do sorteio e a interação com o usuário.

## Como Rodar o Projeto

1. Clone o repositório:
   ```bash
   git clone <URL_do_repositório>
   
2. Navegue até a pasta do projeto: challengeAmigoSecreto e abra no seu navegado para conseguir interagir com a aplicação.

## Funcionalidades
Adicionar Nomes: O usuário pode inserir nomes no campo de texto e adicioná-los à lista de amigos secretos.

Sortear Amigo Secreto: O usuário pode clicar no botão "Sortear amigo" para realizar o sorteio e descobrir quem será o amigo secreto.

## Como Funciona
O usuário insere um nome na caixa de texto e clica no botão "Adicionar" para adicionar o nome à lista.
Quando a lista de amigos estiver completa, o usuário pode clicar no botão "Sortear amigo" para realizar o sorteio. O nome do amigo secreto sorteado será exibido em uma lista abaixo.
Se a lista estiver vazia e o usuário tentar sortear, será exibido um alerta informando que a lista está vazia.