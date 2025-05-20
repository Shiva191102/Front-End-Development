document.addEventListener("DOMContentLoaded", function () {
    const imgs = document.querySelectorAll('.header-slider ul img');
    const prev_btn = document.querySelector('.control_prev');
    const next_btn = document.querySelector('.control_next');

    let n = 0; // Current slide index

    function changeSlide() {
        imgs.forEach(img => img.style.display = 'none'); // Hide all images
        if (imgs[n]) {
            imgs[n].style.display = 'block'; // Show the current image
        }
    }

    changeSlide(); // Show the first image

    prev_btn.addEventListener('click', () => {
        n = (n > 0) ? n - 1 : imgs.length - 1; // Move left
        changeSlide();
    });

    next_btn.addEventListener('click', () => {
        n = (n < imgs.length - 1) ? n + 1 : 0; // Move right
        changeSlide();
    });

   
});