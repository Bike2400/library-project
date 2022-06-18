let library;

class Book {
    constructor(name, author, pages,status) {
      this.name = name;
      this.author = author;
      thid.pages = pages;
      this.status = status;
    }
  }

const DEFAULT_DATA = [
  { name: "The Lord of the Rings", author: "Tolkien",pages:'50', status: "read" },
  {
    name: "Alice in Wonderland",
    author: "Lewis Caroll",
    pages:'50',
    status: "not read",
  },
  { name: "Naruto", author: "Masashi Kishimoto", pages:'50',status: "read" },
];

const $name = document.querySelector("#bname");
const $pages = document.querySelector("#pages");
const $author = document.querySelector("#author");
const $status = document.querySelector("#status");
const $tableBody = document.querySelector("#book-list");

// To add new books to the library
function addBookToLibrary() {
    if ($name.value.length === 0 || $author.value.length === 0 || $pages.value === 0) {
      alert("Please, fill all the fields");
      return;
    }
    const newBook = new Book($name.value, $author.value, $pages.value,$status.value);

  library.push(newBook);
  updateLocalStorage();
}

function changeStatus(book) {
    if (library[book].status === "read") {
      library[book].status = "not read";
    } else library[book].status = "read";
  }

  function deleteBook(currentBook) {
    library.splice(currentBook, currentBook + 1);
  }

