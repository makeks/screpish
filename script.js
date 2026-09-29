function calculate() {

    const price = parseFloat(document.getElementById('type').value);


    const qty = parseInt(document.getElementById('qty').value);


    if (isNaN(qty) || qty < 1) {
        alert('Пожалуйста, введите корректное количество!');
        return;
    }

    const total = price * qty;

    const resultBox = document.getElementById('calcResult');

    resultBox.innerHTML =
        `<strong>Итого:</strong> ${qty} шт × ${price} ₽ = 
        <span style="color:#00796b; font-size:22px;">${total.toLocaleString('ru-RU')} ₽</span>`;

    resultBox.classList.add('show');

    const btn = event.target; 
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => btn.style.transform = 'scale(1)', 150);
}

function submitOrder(event) {
    event.preventDefault();
    const name  = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const qty   = document.getElementById('clientQty').value;


    const resultBox = document.getElementById('orderResult');


    resultBox.innerHTML =
        `Спасибо, <strong>${name}</strong>!<br>
        Ваша заявка на <strong>${qty}</strong> скрепок принята.<br>
        Мы позвоним вам по номеру <em>${phone}</em> в течение 10 минут.`;

    resultBox.classList.add('show');

    event.target.reset();

    return false; 
}



function sendFeedback(event) {
    event.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const resultBox = document.getElementById('feedbackResult');

    resultBox.innerHTML =
        `<strong>${name}</strong>, ваше сообщение отправлено!<br>
        Мы ответим на <em>${email}</em> в ближайшее время.<br>
        <small>Текст: "${message}"</small>`;

    resultBox.classList.add('show');
    event.target.reset();

    return false;
}


window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s ease';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });
});