let myLibrary = [
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

const libraryElement = document.querySelector('#library');

function displayLibrary() {

    libraryElement.innerHTML = '';
    let counter = 0;
    
    if (myLibrary.length == 0) {
        const emptyText = document.createElement('h2');
        emptyText.textContent = "Your library is empty! Try adding a book.";
        libraryElement.appendChild(emptyText);
    }
    
    myLibrary.forEach(book => {
        
        const bookRoot = document.createElement('div');
        bookRoot.classList = "book-entry";

        const titleText = document.createElement('h2');
        const authorText = document.createElement('p');
        const lengthText = document.createElement('p');
        const isReadText = document.createElement('p');
        const deleteBtn = document.createElement('button');
        const readBtn = document.createElement('button');
        const bookInfoDiv = document.createElement('div');
        const buttonsDiv = document.createElement('div');

        titleText.textContent = book.title;
        authorText.textContent = `By: ${book.author}`;
        lengthText.textContent = `Pages: ${book.length}`;
        isReadText.textContent = book.isRead ? 'You have read this book.' : 'You have not read this book.';
        deleteBtn.textContent = 'Delete';
        readBtn.textContent = 'Read Book';

        deleteBtn.className = 'delete-btn';
        readBtn.className = 'read-btn';
        bookInfoDiv.className = "book-info";
        buttonsDiv.className = "book-actions";
        
        bookInfoDiv.appendChild(titleText);
        bookInfoDiv.appendChild(authorText);
        bookInfoDiv.appendChild(lengthText);
        bookInfoDiv.appendChild(isReadText);
        
        buttonsDiv.appendChild(deleteBtn);
        buttonsDiv.appendChild(readBtn);
        
        bookRoot.appendChild(bookInfoDiv);
        bookRoot.appendChild(buttonsDiv);
        
        buttonsDiv.dataset.index = counter;
        libraryElement.appendChild(bookRoot);

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", deleteBook);
        });
        document.querySelectorAll(".read-btn").forEach(btn => {
            btn.addEventListener("click", readBook);
        });

        counter++;
    });
}

displayLibrary();

// event logic
const addBtn = document.querySelector('#add-btn');
const cancelBtn = document.querySelector('#cancel-btn');
const form = document.querySelector("#add-form");

function openForm() {
    form.style.visibility = "visible";
    form.style.position = "static";
}

function closeForm() {
    form.style.visibility = "hidden";
    form.style.position = "absolute";
}

function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission
  
    const formData = new FormData(form);
    
    // Access the form data
    const title = formData.get("title");
    const author = formData.get("author");
    const length = formData.get("pages");
    const isRead = formData.get("isRead") == "on" ? true : false;
    
    myLibrary.unshift(new Book(title, author, length, isRead));
    displayLibrary();

    form.reset();
}

function deleteBook() {
    myLibrary.splice(this.parentElement.dataset.index, 1);
    displayLibrary();
}

function readBook() {
    myLibrary[this.parentElement.dataset.index].isRead = !myLibrary[this.parentElement.dataset.index].isRead;
    displayLibrary();
}

addBtn.addEventListener("click", openForm);
cancelBtn.addEventListener("click", closeForm);
form.addEventListener("submit", submitForm);





