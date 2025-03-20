// Массив с правильными паролями (10 паролей по 10 цифр)
const validPasswords = [
  'G123456789M', 'G987654321M', 'G111111111M', 'G222222222M', 'G333333333M',
  'G444444444M', 'G555555555M', 'G666666666M', 'G777777777M', 'G888888888M'
];
// Массив для хранения использованных паролей
const usedPasswords = [];

function checkPassword() {
  const password = document.getElementById('password').value;
  const messageElement = document.getElementById('message');
  const linkElement = document.getElementById('link');
  
  // Проверка, был ли пароль использован ранее
  if (usedPasswords.includes(password)) {
    messageElement.textContent = 'Этот пароль уже был использован. Пожалуйста, используйте другой.';
    linkElement.style.display = 'none';
    return;
  }

  // Проверка правильности пароля
  if (validPasswords.includes(password)) {
    // Ссылка для пользователя
    const uniqueLink = 'https://infoworld.com.ua/seasonal_uk/';
    linkElement.textContent = Поздравляем! Ссылка для вас: ${uniqueLink};
    linkElement.style.display = 'block';

    // Добавление пароля в список использованных
    usedPasswords.push(password);
    messageElement.textContent = '';
  } else {
    messageElement.textContent = 'Пароль неверный. Свяжитесь с администратором.';
    linkElement.style.display = 'none';
  }
}
