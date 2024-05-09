document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
        slide.classList.add('active');
        } else {
        slide.classList.remove('active');
        }
    });
    }
    function nextSlide() {
    currentSlide = (currentSlide + 1) % 5;
    showSlide(currentSlide);
    }
    setInterval(nextSlide, 3000);
    showSlide(currentSlide);
});
document.addEventListener('DOMContentLoaded', function() {
    const favoriteBtns = document.querySelectorAll('.favorite-btn');

    favoriteBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.Museum');
            const id = this.getAttribute('data-id');
            const title = card.querySelector('.card-title').textContent;
            const rate=card.querySelector('.rate');
            const imageSrc = card.querySelector('.card-img-top').getAttribute('src');

            // Create favorite item object
            const favoriteItem = {
                id: id,
                title: title,
                imageSrc: imageSrc,
                rate :rate
            };

            // Save favorite item to localStorage
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            favorites.push(favoriteItem);
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
});