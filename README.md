# Desafios da imersão Dev 6 edição

## Aula 1 -> Conversor de quilômetros para anos luz e verificar o tempo que demora para ir de uma estrela para outra

Para resolver esse desafio, usarei 2 estrelas:

- Sigma Octantis: é a estrela mais ao sul do Polo Sul celeste e é considerada a estrela mais distante visível da Terra.

- Alpha Centauri A e B: são as estrelas mais próximas do Sol e estão localizadas a 4,37 anos-luz da Terra.

```
const velocidadeDaLuz = 299792; // km/s

const distanciaParaSigmaOctantis = 1930000; // km
const distanciaParaAlphaCentauri = 4.37 * Math.pow(10, 12); // km

const distanciaEmAnosLuz = distanciaParaAlphaCentauri / Math.pow(velocidadeDaLuz, 2);
const distanciaEmQuilometros = distanciaParaAlphaCentauri / 1000;

alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmAnosLuz} anos-luz.`);
alert(`A distância de Sigma Octantis até Alpha Centauri é de ${distanciaEmQuilometros} quilômetros.`);
```

(No entanto, lembre-se de que o tempo de viagem para uma estrela não pode ser calculado apenas pela distância. A velocidade da nave, a massa da estrela e outros fatores precisam ser considerados para calcular o tempo de viagem.)
____________________________________________________________________________________________________________________________________________________________________
## Aula 2 -> Adicionar um número de tentativas para a pessoa tentar acertar e imprimir a resposta no final

Para controlar as tentativas, criarei uma variável de controle de tentativas chamada `tentativasRestantes` e farei a comparação apenas com `==`, sem levar em conta seu tipo.

```
let numeroAleatorio = Math.floor(Math.random() * 1000) + 1;
let tentativasRestantes = 3;

while (tentativasRestantes > 0) {
  let chute = prompt(`Tente adivinhar o número entre 1 e 1000. Você ainda tem ${tentativasRestantes} tentativas.`);
  
  if (chute == numeroAleatorio) {
    alert(`Você acertou o número em ${6 - tentativasRestantes} tentativas! Parabéns!`);
    break;
  } else if (chute < numeroAleatorio) {
    alert("O número secreto é maior está abaixo do número correto.");
  } else {
    alert("O número secreto é menor do número correto.");
  }
  
  tentativasRestantes--;
}

if (tentativasRestantes === 0) {
  alert(`Você perdeu. O número correto era ${numeroAleatorio}.`);
}
```
____________________________________________________________________________________________________________________________________________________________________

## Aula 3 -> Implementar outras versões da estrutura de repetição que fizemos com for, como por exemplo com foreach ou while para exibir a lista de filmes na tela

Para este desafio, vou mostrar o código feito com for, foreach e while.

#### For

```
var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
  "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

// listaFilmes[0] =
//   "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg";
// listaFilmes[1] =
//   "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg";
// listaFilmes[2] =
//   "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg";

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
```

#### Foreach

O método `forEach()` executa uma dada função em cada elemento de um array. Caso queira ver mais exemplos, [segue o link](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach).

```
var listaFilmes = [
  "https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
  "https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
  "https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
  "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

listaFilmes.forEach(function(filme) {
  document.write("<img src=" + filme + ">");
});

```

#### while

```
var listaFilmes = [
"https://upload.wikimedia.org/wikipedia/pt/thumb/1/1b/Schoolrockposter.jpg/210px-Schoolrockposter.jpg",
"https://1.bp.blogspot.com/-ImZPRqLsluE/WFK156_6pNI/AAAAAAAAYBY/0lEhNRF5wfQdLfr6hpT57_Jt2eBrE9H5wCLcB/s1600/arrival-kartoun-desert.jpg",
"https://musicart.xboxlive.com/7/94fc5000-0000-0000-0000-000000000002/504/image.jpg",
"https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
"https://br.web.img2.acsta.net/medias/nmedia/18/91/08/82/20128877.JPG"
];

var i = 0;
while (i < listaFilmes.length) {
document.write("<img src=" + listaFilmes[i] + ">");
i++;
}
```
____________________________________________________________________________________________________________________________________________________________________

## Aula 4 -> Criar um botão para remover um filme na tela;

Para este desafio, vou compartilhar o código HTML, CSS e JavaScript.

- html

```
<html>

<head>
  <title>
    Imersão Dev
  </title>
</head>

<body>
  <div class="container">
    <h1 class="page-title">
      Aluraflix
    </h1>
    <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" class="page-logo" alt="">
    <p class="page-subtitle">
      Qual seu filme favorito?
    </p>
    <div class="form-wrapper">
      <input type="text" id="filme" name="filme" placeholder="Insira endereço de imagem">
      <button onClick="adicionarFilme()">Adicionar Filme</button>
    </div>
  </div>
  <div id="listaFilmes"></div>
  <a href="https://alura.com.br/" target="_blank">
    <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="" class="alura-logo">
  </a>
</body>

</html>
```

- CSS 

```
body {
  font-family: "Roboto Mono", monospace;
  text-align: center;
  background-image: url("https://www.alura.com.br/assets/img/imersoes/dev-2021/dia-04-aluraflix-e-filmes.png");
  background-color: #000000;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}

.container {
  text-align: center;
  padding: 20px;
}

.page-title {
  color: #ffffff;
  margin: 0 0 5px;
}

.page-subtitle {
  color: #ffffff;
  margin-top: 5px;
}

.page-logo {
  width: 200px;
}

.alura-logo {
  width: 40px;
  position: absolute;
  top: 10px;
  right: 10px;
}

#listaFilmes {
  display:flex;
}

#listaFilmes img {
  margin: 10px;
  max-height: 250px;
}

.form-wrapper {
  margin: 0 0 15px;
}

.form-wrapper input {
  display: block;
  margin: 0 auto;
  padding: 10px 15px;
}

.form-wrapper button {
  border: 0;
  color: #ffffff;
  background: #da1e26;
  font-weight: bold;
  padding: 15px 20px;
  font-size: 16px;
  border-radius: 4px;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.form-wrapper button:hover {
  opacity: 0.8;
}

.card-filme {
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  height:250px;
  width:180px;
  margin-bottom: 50px;
}

.botao-remover-filme {
  width:80px;
  color:white;
  background: #da1e26;
  cursor: pointer;
}
```

- JS

```
function removerFilme(event) {
  event.target.parentElement.remove();
}

function adicionarFilme() {
  var filmeFavorito = document.getElementById("filme").value;
  var elementoListaFilmes = document.getElementById("listaFilmes");
  var item = document.createElement("div");
  item.classList.add("card-filme");
  var imagem = document.createElement("img");
  var botaoRemover = document.createElement("button");
  botaoRemover.classList.add("botao-remover-filme")

  imagem.src = filmeFavorito;
  imagem.addEventListener("click", removerFilme);
  botaoRemover.innerHTML = "Remover";
  botaoRemover.addEventListener("click", removerFilme);

  item.appendChild(imagem);
  item.appendChild(botaoRemover);
  elementoListaFilmes.appendChild(item);

  document.getElementById("filme").value = "";
}
```




