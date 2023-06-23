 /* const carousel = document.querySelector('.sec-5-cards');
const items = carousel.querySelectorAll('.card');
const prevButton = carousel.querySelector('.carousel-button prev');
const nextButton = carousel.querySelector('.carousel-button next');
let currentIndex = 0;

function showItems() {
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (items[i]) {
            items[i].style.display = 'block';
        }
    }
}

function hideItems() {
    for (let i = currentIndex; i < currentIndex + 3; i++) {
        if (items[i]) {
            items[i].style.display = 'none';
        }
    }
}

function rotate() {
    hideItems();
    currentIndex++;
    if (currentIndex > items.length - 3) {
        currentIndex = 0;
    }
    showItems();
}

showItems();
setInterval(rotate, 3000);

prevButton.addEventListener('click', () => {
    hideItems();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = items.length - 3;
    }
    showItems();
});

nextButton.addEventListener('click', () => {
    hideItems();
    currentIndex++;
    if (currentIndex > items.length - 3) {
        currentIndex = 0;
    }
    showItems();
});

*/