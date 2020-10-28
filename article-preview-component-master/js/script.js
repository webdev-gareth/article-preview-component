const share = document.getElementById('share-button').addEventListener("click", displayMenu);

function displayMenu() {
    let x = document.getElementById('share-menu');
    x.classList.toggle('share-hidden');
}

