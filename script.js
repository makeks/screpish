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
    event.preventDefault(); // отменяем стандартную отправку

    // ⬇️ Читаем значения из полей
    const name  = document.getElementById('clientName').value.trim();
    const phone = document.getElementById('clientPhone').value.trim();
    const qty   = document.getElementById('clientQty').value;
    const typeSelect = document.getElementById('clientType'); // ссылка на <select>
    const price = parseFloat(typeSelect.value);               // цена за шт
    const typeName = typeSelect.options[typeSelect.selectedIndex].text; // текст выбранного варианта

    const resultBox = document.getElementById('orderResult');

    // ⬇️ Проверка: заполнены ли поля
    if (name === '') {
        alert('Введите ваше имя!');
        document.getElementById('clientName').focus();
        return false;
    }
    if (phone === '') {
        alert('Введите номер телефона!');
        document.getElementById('clientPhone').focus();
        return false;
    }
    if (isNaN(price)) {
        alert('Пожалуйста, выберите тип скрепок!');
        typeSelect.focus();
        return false;
    }
    if (qty === '' || parseInt(qty) < 1) {
        alert('Укажите количество скрепок!');
        document.getElementById('clientQty').focus();
        return false;
    }

    // ⬇️ Считаем итоговую сумму
    const total = price * parseInt(qty);

    // ⬇️ Формируем красивый ответ с типом, количеством и суммой
    resultBox.innerHTML =
        `Спасибо, <strong>${name}</strong>!<br>
        Ваша заявка принята:<br>
        📎 Тип: <strong>${typeName}</strong><br>
        📦 Количество: <strong>${qty} шт</strong><br>
        💰 Итого к оплате: <strong style="color:#00796b; font-size:22px;">
        ${total.toLocaleString('ru-RU')} ₽</strong><br>
        📞 Мы позвоним по номеру <em>${phone}</em> в течение 10 минут.`;

    resultBox.classList.add('show'); // анимация появления
    event.target.reset();            // очищаем все поля формы
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