# Amigo Secreto

## Descrição
Este é um projeto simples para sorteio de amigo secreto, desenvolvido com HTML, CSS e JavaScript. O usuário pode adicionar nomes a uma lista e, ao clicar no botão de sorteio, um nome será escolhido aleatoriamente.

## Funcionalidades
- Adicionar nomes à lista de participantes
- Exibir a lista de amigos adicionados
- Sortear um amigo secreto aleatoriamente

## Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Usar
1. Abra o arquivo `index.html` em um navegador.
2. Digite um nome no campo de entrada e clique no botão "Adicionar" para incluí-lo na lista.
3. Para realizar o sorteio, clique no botão "Sortear amigo".
4. O resultado será exibido abaixo da lista de amigos.

## Estrutura do Projeto
```
/amigo-secreto
│-- index.html
│-- style.css
│-- app.js
│-- assets/
    │-- amigo-secreto.png
    │-- play_circle_outline.png
```

## Implementação da Lógica
O código JavaScript contido no arquivo `app.js` implementa as seguintes funções:

- `adicionarAmigo()`: Adiciona um nome à lista de amigos, validando se o campo não está vazio.
- `limparCampo()`: Limpa o campo de entrada após adicionar um nome.
- `atualizarListaAmigos()`: Atualiza a exibição da lista de amigos.
- `sortearAmigo()`: Sorteia um nome da lista e exibe o resultado.

## Melhorias Futuras
- Implementar remoção de nomes da lista
- Garantir que o sorteio não repita o mesmo nome para si mesmo (caso seja um amigo secreto real)
- Adicionar um design mais interativo e responsivo

## Autor
Este projeto foi desenvolvido para fins educacionais por Júlio César da Silva Chagas.