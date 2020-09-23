
import { NowRequest, NowResponse } from '@vercel/node'
import Telegraf from 'telegraf'

export default async (req: NowRequest, res: NowResponse) => {
  console.log(process.env)

  const bot = new Telegraf(process.env.BOT_TOKEN!)


  const r = await bot.telegram.setWebhook(`${process.env.VERCEL_URL}/api/bot/${process.env.BOT_TOKEN!}`)
  res.send(r)
}