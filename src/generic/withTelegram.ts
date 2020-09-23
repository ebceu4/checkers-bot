import { NowRequest, NowResponse } from '@vercel/node'
import { Telegram } from 'telegraf'
import { Update } from 'telegraf/typings/telegram-types'

export const withTelegramHook = (handler: (telegram: Telegram, update: Update) => void) => (req: NowRequest, res: NowResponse) => {
  const update = req.body as Update
  const telegram = new Telegram(process.env.BOT_TOKEN!)
  const original = telegram.callApi
  async function replaceCallApi(this: Telegram, method: string, data: object) {
    if (method.startsWith('get')) {
      return original.bind(this)(method, data)
    }
    console.log({ method, data })
    res.json({ method, ...data })
    return
  }
  telegram.callApi = replaceCallApi

  handler(telegram, update)
}