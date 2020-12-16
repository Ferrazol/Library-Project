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

function render(){
    const selecionartd = document.getElementById('livros');
    while (selecionartd.firstChild){
        selecionartd.removeChild(selecionartd.firstChild);
    }
    for (let i=0; i<myLibrary.length; i++){
        criarLivro(myLibrary[i]);
    }
}

function criarLivro(item) {
    //pega a minha div chamada livros
    let list = document.getElementById("livros");
    console.log(item);
    const card = `<div class="card">
    <div class="container">
      <h4><b> ${item.title}</b></h4>
      <p>Autor: ${item.author}</p>
      <p>Pages: ${item.pages}</p>
      <p>Read: ${item.read}</p>
    </div>
  </div>`
    const ele = document.createElement("div");
    ele.innerHTML = card;
    list.appendChild(ele);
}
