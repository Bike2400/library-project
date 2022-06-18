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


  function findBook(libraryArray, name) {
    if (libraryArray.length === 0 || libraryArray === null) {
      return;
    }
    for (book of libraryArray)
      if (book.name === name) {
        return libraryArray.indexOf(book);
      }
  }

  function clearForm() {
    $name.value = "";
    $pages.value = "";
    $author.value = "";
  }

  function updateLocalStorage() {
    localStorage.setItem("library", JSON.stringify(library));
    //library = JSON.parse(localStorage.getItem("library"));
  }

  //Displays the default set of contents if the system does not have a library
  function checkLocalStorage() {
    if (localStorage.getItem("library")) {
      library = JSON.parse(localStorage.getItem("library"));
    } else {
      library = DEFAULT_DATA;
    }
  }
  
//Display the tables created
  function render() {
    checkLocalStorage();
    $tableBody.innerHTML = "";
    library.forEach((book) => {
      const htmlBook = `
        <tr>
          <td>${book.name}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td><button class="status-button">${book.status}</button></td>
          <td><button class="delete">delete</button></td>
        </tr>
        `;
      $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
    });
  }
  
  render();
  

