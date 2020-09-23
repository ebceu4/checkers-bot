
import { NowRequest, NowResponse } from '@vercel/node'
import Telegraf from 'telegraf'

export default (req: NowRequest, res: NowResponse) => {
  console.log(process.env)

  const bot = new Telegraf(process.env.BOT_TOKEN!)
  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch({ webhook: { hookPath: 'api', domain: process.env.VERCEL_URL } })
  res.send(process.env)
}