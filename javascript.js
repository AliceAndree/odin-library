const addBookButton = document.querySelector("#add-book");
const closeButton = document.querySelector("#close");
const modal = document.querySelector("#modal");

addBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

const Book1 = new Book(
  "L'Amour sous Algorithme",
  "Judith Duportail",
  232,
  true,
  "./assets/amour-sous-algo.jpeg"
);

const Book2 = new Book(
  "Habiter En Oiseau",
  "Vinciane Despret",
  224,
  false,
  "./assets/habiter-en-oiseau.jpg"
);

const Book3 = new Book(
  "Le Plaisir",
  "Maria Hesse",
  160,
  false,
  "./assets/le-plaisir.jpg"
);

const myLibrary = [Book1, Book2, Book3];

function Book(title, author, pages, read, image) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.image = image;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}, image: ${this.image}`;
  };
}

function displayBooks(books) {
  books.forEach((book) => {
    console.log(book);
  });
}

displayBooks(myLibrary);

function addBookToLibrary() {}
