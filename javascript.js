const Book1 = new Book(
  "L'Amour sous Algorithme",
  "Judith Duportail",
  232,
  "already read"
);

const Book2 = new Book("La Volonté de Changer", "Bell Hooks", 226, "not read");

const Book3 = new Book(
  "Féminisme et Réseaux Sociaux",
  "Elvire Duvelle-Charles",
  212,
  "not read"
);

const myLibrary = [Book1, Book2, Book3];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function displayBooks(books) {
  books.forEach((book) => {
    console.log(book);
  });
}

displayBooks(myLibrary);

function addBookToLibrary() {}
