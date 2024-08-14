const button = document.getElementById('colorButton');
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'];

button.addEventListener('click', () => {
    const currentColor = button.style.backgroundColor;
    let newColor;

    do {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    } while (newColor === currentColor);

    button.style.backgroundColor = newColor;
});

window.onload = () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning!';
    } else if (hours < 18) {
        greeting = 'Good afternoon!';
    } else {
        greeting = 'Good evening!';
    }

    alert(greeting);
};

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    
    document.getElementById('result').textContent = `Result: ${result}`;
}

document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});