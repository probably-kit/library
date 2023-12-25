// Event listener for opening the popup
document.getElementById('openPopupButton').addEventListener('click', openPopup);

// Function to open the popup
function openPopup() {
    document.getElementById('popupContainer').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('popupContainer').style.opacity = '1';
    }, 100);
}

// Function to close the popup
function closePopup() {
    document.getElementById('popupContainer').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('popupContainer').style.display = 'none';
    }, 500);
}


function onTelegramAuth(user) {
    alert('Logged in as ' + user.first_name + ' ' + user.last_name + ' (' + user.id + (user.username ? ', @' + user.username : '') + ')');
    }

// Event listener for confirming the form submission
const infoArray = [];

function addInfoToGrid() {
    // Get form values
    const elementTitle = document.getElementById('title').value;
    const elementAuthor = document.getElementById('author').value;
    const elementPages = document.getElementById('pages').value;

    // Create an object with form information
    const infoObject = {
        title: elementTitle,
        author: elementAuthor,
        pages : elementPages
    };

    // Add the object to the array
    infoArray.push(infoObject);

    // Clear the form fields after submitting
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';

    // Update the grid with the new information
    updateGrid();
}

function updateGrid() {
    // Clear existing grid elements
    document.getElementById('gridContainer').innerHTML = '';

    // Create grid elements based on the objects in the array
    infoArray.forEach(infoObject => {
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerHTML = `<p><strong>Title:</strong> ${infoObject.title}</p>
              <p><strong>Author:</strong> ${infoObject.author}</p>
              <p><strong>Pages:</strong>${infoObject.pages}</p>`;
        document.getElementById('gridContainer').appendChild(gridItem);
    });
}

//   // // Create a new grid item
//     const gridItem = document.createElement('div');
//     gridItem.className = 'grid-item';
//     gridItem.innerHTML = `<p><strong>Title:</strong> ${title}</p>
//      <p><strong>Author:</strong> ${author}</p>
//      <p><strong>Pages:</strong>${pages}</p>`;