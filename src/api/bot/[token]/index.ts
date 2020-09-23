import { NowRequest, NowResponse } from '@vercel/node'
import { withAuth } from '../withAuth'


export default withAuth(async (req: NowRequest, res: NowResponse) => {
  const { message } = req.body as Update
  res.json({
    method: 'sendMessage',
    chat_id: message.chat.id,
    text: `echo: ${message.text}`
  })
})

export interface Update {
  update_id: number
  message: Message
}

export interface Message {
  message_id: number
  from: From
  chat: Chat
  date: number
  text: string
}

export interface Chat {
  id: number
  first_name: string
  last_name: string
  username: string
  type: string
}

export interface From {
  id: number
  is_bot: boolean
  first_name: string
  last_name: string
  username: string
  language_code: string
}
