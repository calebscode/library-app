const myLibrary = [
    {
        title: 'Norwegian Wood',
        author: 'Haruki Murakami',
        length: 296,
        isRead: false
    },
    {
        title: 'Leaves of Grass',
        author: 'Walt Whitman',
        length: 175,
        isRead: false
    },
    {
        title: 'The Alchemist',
        author: 'Pauhlo Coehlo',
        length: 120,
        isRead: true
    }
];

function Book(title, author, length, isRead) {
    this.title = title;
    this.author = author;
    this.length = length;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayLibrary();
}

const libraryElement = document.querySelector('#library');

function displayLibrary() {
    myLibrary.forEach(book => {
        console.log(book.title);

        const bookRoot = document.createElement('div');
        bookRoot.classList = "book-entry";

        const titleText = document.createElement('h2');
        const authorText = document.createElement('p');
        const lengthText = document.createElement('p');
        const isReadText = document.createElement('p');

        titleText.textContent = book.title;
        authorText.textContent = `By: ${book.author}`;
        lengthText.textContent = `Pages: ${book.length}`;
        isReadText.textContent = book.isRead ? 'You have read this book.' : 'You have not read this book.';

        bookRoot.appendChild(titleText);
        bookRoot.appendChild(authorText);
        bookRoot.appendChild(lengthText);
        bookRoot.appendChild(isReadText);

        libraryElement.appendChild(bookRoot);
    });
}

displayLibrary();