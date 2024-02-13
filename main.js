class PopupManager {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.closeButton = this.container.querySelector('.close');
        this.initEventListeners();
    }

    initEventListeners() {
        this.closeButton.addEventListener('click', () => this.close());
    }

    open() {
        if (!this.container) return;
        this.container.style.display = 'flex';
        setTimeout(() => this.container.style.opacity = '1', 100);
    }

    close() {
        if (!this.container) return;
        this.container.style.opacity = '0';
        setTimeout(() => this.container.style.display = 'none', 500);
    }
}

class GridManager {
    constructor(gridContainerId) {
        this.gridContainer = document.getElementById(gridContainerId);
        this.infoArray = [
            { title: "Pride and Prejudice", author: "Jane Austen", pages: 432 },
            { title: "1984", author: "George Orwell", pages: 328 },
            { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 384 },
            { title: "The Lord of the Rings: The Fellowship of the Ring", author: "J.R.R. Tolkien", pages: 423 },
            { title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", pages: 417 },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", pages: 180 },
            { title: "Frankenstein",author:"Mary Shelley", pages: 280 },
            { title: "War and Peace", author: "Leo Tolstoy", pages: 1225 },
            { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", pages: 309 }
        ];
        this.updateGrid(); // Automatically populate the grid with the books info
    }

    addInfoToGrid(title, author, pages) {
        this.infoArray.push({ title, author, pages });
        this.updateGrid();
    }

    updateGrid() {
        if (!this.gridContainer) return;
        this.gridContainer.innerHTML = '';
        this.infoArray.forEach(info => {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridItem.innerHTML = `<p><strong>Title:</strong> ${info.title}</p>
                                  <p><strong>Author:</strong> ${info.author}</p>
                                  <p><strong>Pages:</strong> ${info.pages}</p>`;
            this.gridContainer.appendChild(gridItem);
        });
    }
}

// Instantiate classes
const popupManager = new PopupManager('popupContainer');
const gridManager = new GridManager('gridContainer');

document.getElementById('openPopupButton').addEventListener('click', () => popupManager.open());

document.getElementById('confirmButton').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    gridManager.addInfoToGrid(title, author, pages);

    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    popupManager.close(); // Close the popup after adding the info
});

// Assuming the Telegram Authentication function and UserInfoAlert are defined elsewhere in your script.
function onTelegramAuth(user) {
    console.log(user); // This is just a placeholder. Adapt this function based on your actual Telegram Auth integration.
}

