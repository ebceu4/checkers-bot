
import { NowRequest, NowResponse } from '@vercel/node'
import Telegraf from 'telegraf'

export default async (req: NowRequest, res: NowResponse) => {
  console.log(process.env)
  const bot = new Telegraf(process.env.BOT_TOKEN!)
  const info = await bot.telegram.getWebhookInfo()
  res.send(info)
}