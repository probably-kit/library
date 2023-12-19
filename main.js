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

// Event listener for confirming the form submission
document.getElementById('confirmButton').addEventListener('click', confirmForm);

// Function to confirm the form submission
function confirmForm() {
    // Add your form submission logic here
    alert('Form submitted!');
    closePopup(); // Close the popup after confirmation

    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;

    // // Create a new grid item
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridItem.innerHTML = `<p><strong>Title:</strong> ${title}</p>
     <p><strong>Author:</strong> ${author}</p>
     <p><strong>Pages:</strong>${pages}</p>`;

    // // Append the grid item to the container
    document.getElementById('gridContainer').appendChild(gridItem);

    // // Clear the form fields after submitting
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = ''
}
