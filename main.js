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
        this.infoArray = [];
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
                                  <p><strong>Pages:</strong>${info.pages}</p>`;
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
});

// Telegram Authentication (assuming it remains the same)
function onTelegramAuth(user) {
    UserInfoAlert.onTelegramAuth(user);
}
