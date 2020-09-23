import { NowRequest, NowResponse } from '@vercel/node'
import Telegraf from 'telegraf'
import { withAuth } from '../../withAuth'

export default withAuth((req: NowRequest, res: NowResponse) => {
  const {
    query: { name },
  } = req

  const bot = new Telegraf('1345995099:AAFlakklqYpPCuRNYibDmvfRR7w_4NB6Z2E')
  bot.start((ctx) => ctx.reply('Welcome'))
  bot.help((ctx) => ctx.reply('Send me a sticker'))
  bot.on('sticker', (ctx) => ctx.reply('👍'))
  bot.hears('hi', (ctx) => ctx.reply('Hey there'))
  bot.launch({ webhook: { hookPath: 'api', domain: process.env.VERCEL_URL } })


  res.send('OK')
})