const puffButton = document.getElementById('puffButton');
const lastPuffDisplay = document.getElementById('lastPuff');

function updateLastPuff() {
    const lastPuffTime = localStorage.getItem('lastPuffTime'); // Получаем время из localStorage
    if (lastPuffTime) { // Если время есть (не null и не undefined)
        const lastPuffDate = new Date(parseInt(lastPuffTime)); // Преобразуем строку в объект Date
        const now = new Date(); // Текущее время
        const diff = now.getTime() - lastPuffDate.getTime(); // Разница в миллисекундах
        const seconds = Math.floor(diff / 1000); // Преобразуем в секунды
        const minutes = Math.floor(seconds / 60); // Преобразуем в минуты
        const hours = Math.floor(minutes / 60); // Преобразуем в часы
        const days = Math.floor(hours / 24); // Преобразуем в дни

        let timeString = '';
        if (days > 0) {
            timeString += days + ' d. ';
        }
        if (hours > 0) {
            timeString += (hours % 24) + ' h. '; // % 24 - остаток от деления на 24 (чтобы не было 25 ч.)
        }
        if (minutes > 0) {
            timeString += (minutes % 60) + ' min. '; // % 60 - остаток от деления на 60
        }
        timeString += (seconds % 60) + ' sec. ago'; // % 60 - остаток от деления на 60
        lastPuffDisplay.textContent = timeString; // Обновляем текст на странице
    } else {
        lastPuffDisplay.textContent = 'Never'; // Если времени нет, показываем "Никогда"
    }
}

puffButton.addEventListener('click', () => {
    localStorage.setItem('lastPuffTime', Date.now()); // Сохраняем текущее время в localStorage
    updateLastPuff(); // Обновляем отображение времени
});

updateLastPuff(); // Обновляем при загрузке страницы
setInterval(updateLastPuff, 1000); // Обновляем каждую секунду