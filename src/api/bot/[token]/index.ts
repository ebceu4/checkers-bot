import { withAuth } from '../withAuth'
import { withTelegramHook } from '../withTelegram'

export default withAuth(withTelegramHook(async (telergam, update) => {
  console.log(update)
  telergam.sendMessage(update.message?.chat?.id!, `echo: ${update.message?.text}`)
}))

// export interface Update {
//   update_id: number
//   message: Message
// }

// export interface Message {
//   message_id: number
//   from: From
//   chat: Chat
//   date: number
//   text: string
// }

// export interface Chat {
//   id: number
//   first_name: string
//   last_name: string
//   username: string
//   type: string
// }

// export interface From {
//   id: number
//   is_bot: boolean
//   first_name: string
//   last_name: string
//   username: string
//   language_code: string
// }
