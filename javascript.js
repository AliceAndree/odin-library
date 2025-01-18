const discoverButton = document.querySelector("#discover-button");
const addBookButton = document.querySelector("#add-book");
const closeButton = document.querySelector("#close");
const confirmButton = document.querySelector("#confirm");
const modal = document.querySelector("#modal");
const dragAndDropArea = document.querySelector("#upload-file");
let bookImage = null;

const Book1 = new Book(
  "L'Amour sous Algorithme",
  "Judith Duportail",
  232,
  false,
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
    const bookList = document.querySelector("#books");

    const bookElement = document.createElement("div");
    bookElement.classList.add("book");

    const bookTop = document.createElement("div");
    bookTop.classList.add("book-top");
    bookTop.style.backgroundImage = `url("${book.image}")`;

    const pagesNumber = document.createElement("div");
    pagesNumber.classList.add("number-of-pages");
    pagesNumber.textContent = `${book.pages} Pages`;
    bookTop.appendChild(pagesNumber);
    bookElement.appendChild(bookTop);

    const bookBottom = document.createElement("div");
    bookBottom.classList.add("book-bottom");

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;
    bookBottom.appendChild(bookTitle);

    const bookAuthor = document.createElement("h4");
    bookAuthor.textContent = book.author;
    bookBottom.appendChild(bookAuthor);

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");
    const readButton = document.createElement("button");
    readButton.classList.add("read-button");

    if (book.read === true) {
      readButton.textContent = "Read";
      readButton.style.backgroundColor = "#3EA344";
    } else {
      readButton.textContent = "Mark As Read";
    }

    readButton.addEventListener("click", () => {
      if (readButton.textContent === "Mark As Read") {
        book.read = true;
        readButton.innerHTML = `<img src="./assets/check.svg" alt="Check Icon" />Read`;
        readButton.style.backgroundColor = "#3EA344";
      } else {
        book.read = false;
        readButton.textContent = "Mark As Read";
        readButton.style.backgroundColor = "#1170e4";
      }
    });

    bookButtons.appendChild(readButton);
    const deleteButton = document.createElement("img");
    deleteButton.classList.add("delete");
    deleteButton.src = "./assets/delete.svg";
    deleteButton.alt = "Delete Button";
    bookButtons.appendChild(deleteButton);
    bookBottom.appendChild(bookButtons);
    bookElement.appendChild(bookBottom);

    bookList.appendChild(bookElement);

    deleteButton.addEventListener("click", () => {
      deleteButton.closest(".book").remove();
    });
  });
}

displayBooks(myLibrary);

/* Event Listeners */

discoverButton.addEventListener("click", () => {
  if (discoverButton.textContent === "Read Now") {
    discoverButton.textContent = "Continue";
    discoverButton.style.backgroundColor = "#3EA344";
  } else {
    discoverButton.textContent = "Read Now";
    discoverButton.style.backgroundColor = "#1170e4";
  }
});

addBookButton.addEventListener("click", () => {
  modal.showModal();
});

closeButton.addEventListener("click", () => {
  modal.close();
});

confirmButton.addEventListener("click", function (event) {
  event.preventDefault();
  let bookTitle = document.querySelector("#book-title");
  bookTitle = bookTitle.value;

  let bookAuthor = document.querySelector("#book-author");
  bookAuthor = bookAuthor.value;

  let bookNumberOfPages = document.querySelector("#book-nr-of-pages");
  bookNumberOfPages = bookNumberOfPages.value;

  const read = document.querySelector("#read-check");
  let isRead;

  if (read.checked) {
    isRead = true;
  } else {
    isRead = false;
  }

  if (bookImage == null || bookImage == undefined || bookImage == "") {
    bookImage = "#";
  }

  const newBook = new Book(
    bookTitle,
    bookAuthor,
    bookNumberOfPages,
    isRead,
    bookImage
  );

  myLibrary.push(newBook);
  document.querySelectorAll(".book").forEach((e) => e.remove());
  displayBooks(myLibrary);
  document.querySelector("#book-form").reset();
  modal.close();
});

dragAndDropArea.addEventListener("change", () => {
  const filename = dragAndDropArea.files[0];
  bookImage = URL.createObjectURL(filename);
});

dragAndDropArea.addEventListener("dragover", () => {
  dragAndDropArea.parentNode.classList.add("draging");
});

dragAndDropArea.addEventListener("drop", () => {
  dragAndDropArea.parentNode.classList.remove("draging");
});
