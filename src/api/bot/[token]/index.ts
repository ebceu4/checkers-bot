import Telegraf from 'telegraf'
import { NowRequest, NowResponse } from '@vercel/node'
import { withAuth } from '../withAuth'


export default withAuth(async (req: NowRequest, res: NowResponse) => {
  console.log('BODY', req.body)

  const telegraf = new Telegraf(process.env.BOT_TOKEN!)
  telegraf.use(Telegraf.log())

  telegraf.start((ctx) => ctx.reply('Welcome'))
  telegraf.help((ctx) => ctx.reply('Send me a sticker'))
  telegraf.on('sticker', (ctx) => ctx.reply('👍'))
  telegraf.hears('hi', (ctx) => ctx.reply('Hey there'))
  telegraf.launch({ webhook: { domain: 'https://checkersgamebot.vercel.app', hookPath: `/api/bot/${process.env.BOT_TOKEN!}` } })
    .then(x => telegraf.handleUpdate(req.body, res))
    .then(x => telegraf.stop())
})