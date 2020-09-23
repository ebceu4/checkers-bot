
import { NowRequest, NowResponse } from '@vercel/node'
import Telegraf from 'telegraf'

export default async (_: NowRequest, res: NowResponse) => {
  console.log(process.env)
  const bot = new Telegraf(process.env.BOT_TOKEN!)
  const r = await bot.telegram.setWebhook(`https://checkersgamebot.vercel.app/api/bot/${process.env.BOT_TOKEN!}`)
  res.send(r)
}