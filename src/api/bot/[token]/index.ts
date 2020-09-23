import { withAuth } from '../../../generic/withAuth'
import { withTelegramHook } from '@/generic/withTelegram'

export default withAuth(withTelegramHook(async (telergam, update) => {
  console.log(update)

  const chatId = update.message?.chat?.id!
  if (!chatId)
    return

  if (update.message?.sticker) {
    telergam.sendSticker(chatId, update.message.sticker.file_id)
  }
  else {
    telergam.sendMessage(chatId, `echo: ${update.message?.text}`)
  }

}))
