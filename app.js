let listaAmigos = [];
let amigosSorteados = [];

function adicionarAmigo() {
  const inputNome = document.getElementById("amigo");
  let nomeAmigo = inputNome.value.trim();

 
  if (!nomeAmigo || !isNaN(nomeAmigo)) {
    alert("Nome inválido. Insira um nome correto.");
    return;
  }

  
  if (listaAmigos.includes(nomeAmigo)) {
    alert("Este nome já foi adicionado. Escolha um nome diferente.");
    return;
  }

 
  listaAmigos.push(nomeAmigo);
  mostrarListaDeAmigos();

  inputNome.value = "";
}

function mostrarListaDeAmigos() {
  const ulAmigos = document.getElementById("listaAmigos");
  ulAmigos.innerHTML = "";

  listaAmigos.forEach((amigo, index) => {
    const liElemento = document.createElement("li");
    liElemento.textContent = amigo;
    ulAmigos.appendChild(liElemento);
  });
}

function realizarSorteio() {
  
  if (listaAmigos.length === 0) {
    alert("A lista de amigos esta sem nada. Adicione alguns amigos antes de sortear.");
    return;
  }

  
  if (listaAmigos.length < 3) {
    alert("e necessário pelo menos três amigos para realizar o sorteio.");
    return;
  }


  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoEscolhido = listaAmigos[indiceAleatorio];

  amigosSorteados.push(amigoEscolhido);


  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = "O amigo secreto sorteado é: " + amigoEscolhido;

  
  amigosSorteados = [];


  mostrarListaDeAmigos();
}