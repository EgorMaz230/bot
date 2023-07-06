


const cron = require('node-cron');
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot('6384926942:AAHyYV_eX4q8nbzG5eTixCVQuuEPFcaI1Bo', { polling: true });

// Получите chatId, например, с помощью команды '/start' вашему боту в Telegram
const chatId = '-1001722598059';

// Функция для отправки сообщения
function sendMessage(message) {
  bot.sendMessage(chatId, message);
}

// Задача для выполнения в указанное время каждый день
const taskSunday = cron.schedule('20 10 * * 0', () => {
  const message = 'FE 1y_7 менторська година неділя,  11:40 – 12:40 Інформація для приєднання до Google Meet Посилання на відеодзвінок: https://meet.google.com/wtq-mkzy-ruv Або наберіть: +44 20 3873 3170 (PIN-код: 2615750918333) Інші номери телефонів: https://tel.meet/wtq-mkzy-ruv?pin=2615750918333';
  sendMessage(message);
});

const taskWednesday = cron.schedule('40 17 * * 3', () => {
  const message = 'привіт) FE 1y_7 tech skills Середа,  6:00 – 7:30пп Часовий пояс: Europe/Kiev Інформація для приєднання до зустрічі Google Meet Посилання на відеодзвінок: https://meet.google.com/nbi-kbof-hrw';
  sendMessage(message);
});

const taskFriday = cron.schedule('40 17 * * 5', () => {
  const message = 'FE 1y_7 soft skills пʼятниця, 18:00 – 19:00 Інформація для приєднання до Google Meet Посилання на відеодзвінок: https://meet.google.com/ypk-cmpu-qok';
  sendMessage(message);
});

const taskFriday2 = cron.schedule('50 18 * * 5', () => {
  const message = 'FE 1y_7 tech skills пʼятниця, 19:10 – 20:40 Інформація для приєднання до Google Meet Посилання на відеодзвінок: https://meet.google.com/hjn-beaa-oai';
  sendMessage(message);
});

// Запуск задач
taskSunday.start();
taskWednesday.start();
taskFriday.start();
taskFriday2.start();


  