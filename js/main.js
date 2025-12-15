// Файл: js/main.js

console.log("JavaScript завантажено успішно!"); // Це перевірка. Натисни F12 -> Console, щоб побачити цей напис.

document.addEventListener('DOMContentLoaded', () => {  // Чекаємо, поки весь HTML буде завантажено
    
    // --- 1. ТЕМНА ТЕМА ---
    const themeBtn = document.getElementById('themeToggle'); // Кнопка перемикання теми
    const htmlElement = document.documentElement;// Отримуємо елемент <html>

    // Перевірка збереженої теми при завантаженні
    if (localStorage.getItem('theme') === 'dark') {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        if(themeBtn) themeBtn.textContent = '☀️'; // Змінюємо іконку на сонце
    }

    // Обробка кліку по кнопці теми
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            
            if (currentTheme === 'dark') {
                // Перемикаємо на світлу
                htmlElement.setAttribute('data-bs-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeBtn.textContent = '🌙';
            } else {
                // Перемикаємо на темну
                htmlElement.setAttribute('data-bs-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeBtn.textContent = '☀️';
            }
        });
    } else {
        console.error("Помилка: Кнопка з ID 'themeToggle' не знайдена в HTML!");
    }

    //2. ПОШУК ПО ТАБЛИЦІ
    const searchInput = document.getElementById('searchInput'); // Поле вводу для пошуку
    
    if (searchInput) {
        searchInput.addEventListener('keyup', (e) => {
            const searchText = e.target.value.toLowerCase();
            const tableRows = document.querySelectorAll('tbody tr'); // Шукаємо всі рядки таблиці
            
            tableRows.forEach(row => {
                const rowText = row.textContent.toLowerCase();
                if (rowText.includes(searchText)) {
                    row.style.display = ''; // Показати
                } else {
                    row.style.display = 'none'; // Сховати
                }
            });
        });
    }

// --- 3. ВАЛІДАЦІЯ ФОРМИ (JS перевірка) ---
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            // 1. Зупиняємо стандартну відправку браузером
            e.preventDefault();

            // 2. Отримуємо значення з полів
            const nameValue = document.getElementById('name').value.trim();
            const emailValue = document.getElementById('email').value.trim();
            const messageValue = document.getElementById('message').value.trim();

            // 3. ПЕРЕВІРКА (Валідація)
            
            // Перевірка імені (щоб було не менше 2 букв)
            if (nameValue.length < 3) {
                alert("Помилка: Ім'я має бути не коротшим за 3 літери!");
                return; // Зупиняємо функцію, далі код не піде
            }

            // Перевірка пошти (чи є там "собачка" @ і крапка)
            if (!emailValue.includes('@') || !emailValue.includes('.')) {
                alert("Помилка: Введіть коректний Email (наприклад, user@mail.com)!");
                return;
            }

            // Перевірка повідомлення (чи воно не пусте)
            if (messageValue === '') {
                alert("Помилка: Текст повідомлення не може бути пустим!");
                return;
            }

            // 4. Якщо всі перевірки пройшли успішно:
            alert('Успіх! Ваше повідомлення перевірено і відправлено!');
            form.reset(); // Очищаємо поля
        });
    } else {
        console.error("Помилка: Форма з ID 'contactForm' не знайдена в HTML!");
    }
});