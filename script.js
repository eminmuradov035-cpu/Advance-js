function Book(title, author, genre) {
  this.title = title
  this.author = author
  this.genre = genre
}

Book.prototype.getDetails = function () {
  return this.title + " by " + this.author + ", Genre: " + this.genre
}

function EBook(title, author, genre, fileSize) {
  Book.call(this, title, author, genre)
  this.fileSize = fileSize
}

EBook.prototype = Object.create(Book.prototype)
EBook.prototype.constructor = EBook

EBook.prototype.download = function () {
  console.log(this.title + " is downloading...")
}

function PrintedBook(title, author, genre, pages) {
  Book.call(this, title, author, genre)
  this.pages = pages
}

PrintedBook.prototype = Object.create(Book.prototype)
PrintedBook.prototype.constructor = PrintedBook

PrintedBook.prototype.read = function () {
  console.log(this.title + " is being read...")
}

function Library(name) {
  this.name = name
  this.books = []
}

Library.prototype.addBook = function (book) {
  console.log("Added to " + this.name + ": " + book.title)
  this.books.push(book)
}

Library.prototype.listBooks = function () {
  console.log("Books in " + this.name + ":")

  this.books.forEach(function (book, index) {
    console.log((index + 1) + ". " + book.getDetails())
  })
}

const lib = new Library("Central Library")

const book1 = new EBook("JS Basics", "Ilkin", "Programming", "5MB")
const book2 = new PrintedBook("CSS Guide", "Ilkin", "Design", 300)

lib.addBook(book1)
lib.addBook(book2)

lib.listBooks()

book1.download()
book2.read()