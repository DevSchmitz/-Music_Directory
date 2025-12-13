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

    // --- 3. ВАЛІДАЦІЯ ФОРМИ (Тільки на contact.html) ---
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Ваше повідомлення відправлено!');
            form.reset();
        });
    }
});