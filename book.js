const addNewBook = document.querySelector("#addNewBook");
addNewBook.addEventListener("click", addBookToLibrary);

//CLASSE PARA CONSTRUIR UM LIVRO, SÓ DANDO OS PARÂMETROS
class Book {
  constructor(title, author, pages, read) {
    // OS PARAMETROS SERÃO OS VALORES DOS INPUTS
    // PESQUISO OS INPUTS USANDO "." ENTRO NO ID "FORM" E PEGO O ID "TITLE" E O SEU VALOR.
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value + " pages";
    this.read = form.read.checked;
  }
}
let myLibrary = [];
let newBook;

function addBookToLibrary() {
  event.preventDefault();
  newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);

  render();
}

function render() {
  // pega o elemento de Id livros
  const getLivros = document.getElementById("livros");
  //enquanto tiver um elemento DOM filho, remove ele
  while (getLivros.firstChild) {
    getLivros.removeChild(getLivros.firstChild);
  }
  //recriar os elementos filhos dentro do Id 'livros'
  for (let i = 0; i < myLibrary.length; i++) {
    criarLivro(myLibrary[i]);
  }
}

function criarLivro(livroInfo) {
  // *** Cria um card livro, recebendo de parâmetro o array
  // myLibrary que contém objetos com info do livro
  //pega a div
  let n = myLibrary.indexOf(livroInfo);
  console.log(n);
  const list = document.getElementById("livros");
  //cria um card contendo as info do livro
  //**************** */
  let card = document.createElement("div");
  card.setAttribute("class", "card");

  let title = document.createElement("h1");
  title.innerHTML = livroInfo.title;

  let author = document.createElement("p");
  author.innerHTML = "Author: " + livroInfo.author;

  let pages = document.createElement("p");
  pages.innerHTML = "Pages: " + livroInfo.pages;

  let read = document.createElement("p");
  if (livroInfo.read ===false){
    read.innerHTML = 'Not Read';
    read.style.backgroundColor = 'red';
  }
  else {
    read.innerHTML = 'Read';
    read.style.backgroundColor = 'green';
  }

  // "Read: " + livroInfo.read;
  read.setAttribute('id', 'read'+ n)

  let rmvbutton = document.createElement("button");
  rmvbutton.innerHTML = "Remove";
  rmvbutton.setAttribute("class", "novoLivro");
  rmvbutton.setAttribute('id', 'rmvButton'+ n)

  let readbutton = document.createElement("button");
  readbutton.innerHTML = "Read";
  readbutton.setAttribute("class", "novoLivro");
  readbutton.setAttribute('id', 'readButton'+ n)
  //*************** */
  //ADICIONA OS OBJETOS CRIADOS DENTRO DO CARD CRIADO
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(rmvbutton);
  card.appendChild(readbutton);
  //COLOCA O CARD DENTRO DA DIV NA PAGINA PRINCIPAL
  list.appendChild(card);

  // COLOCA UMA FUNÇÃO DE REMOVER PARA O BOTAO COM ID EM QUESTÃO
  document.getElementById('rmvButton'+n).addEventListener("click", () => {
    myLibrary.splice(n, 1);
    render();
  });
  document.getElementById('readButton'+n).addEventListener("click", () => {
    myLibrary[n].read = true;
    render();
  });
}
