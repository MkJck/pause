from telegram import Update, WebAppInfo, KeyboardButton, ReplyKeyboardMarkup
from telegram.ext import ApplicationBuilder, CommandHandler, CallbackContext

# Замените 'YOUR_BOT_TOKEN' на токен вашего бота, полученный от BotFather
TOKEN = '7767022717:AAHaJIp0TCd4BAcgfTJxqEnxzCX1rBlkkdQ'

async def start(update: Update, context: CallbackContext):
    # Check if message exists
    if not update.message:
        return
    
    # Создаем кнопку для открытия Web App
    web_app_keyboard = [
        [KeyboardButton(text="Open Pause App", web_app=WebAppInfo(url="https://pause-git-main-mkjcks-projects.vercel.app/"))]
    ]
    reply_markup = ReplyKeyboardMarkup(web_app_keyboard, resize_keyboard=True, one_time_keyboard=False)

    # Отправляем сообщение с кнопкой
    await update.message.reply_text(
        "Press the button below to open Pause App:",
        reply_markup=reply_markup
    )

def main():
    application = ApplicationBuilder().token(TOKEN).build()

    # Регистрируем обработчик команды /start
    start_handler = CommandHandler('start', start)
    application.add_handler(start_handler)

    application.run_polling()

if __name__ == '__main__':
    main()