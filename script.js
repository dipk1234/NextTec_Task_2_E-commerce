document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product1 button');
    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Item added to cart!');
        });
    });
});
