document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Item added to cart!');
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    console.log("Products loaded.");
});