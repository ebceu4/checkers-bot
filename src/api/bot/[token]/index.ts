import Telegraf from 'telegraf'
import { NowRequest, NowResponse } from '@vercel/node'
import { withAuth } from '../withAuth'

const telegraf = new Telegraf(process.env.BOT_TOKEN!)
telegraf.use(Telegraf.log())

telegraf.start((ctx) => ctx.reply('Welcome'))
telegraf.help((ctx) => ctx.reply('Send me a sticker'))
telegraf.on('sticker', (ctx) => ctx.reply('👍'))
telegraf.hears('hi', (ctx) => ctx.reply('Hey there'))
telegraf.launch({ webhook: { hookPath: `/api/bot/${process.env.BOT_TOKEN!}`, host: 'https://checkersgamebot.vercel.app' } })

export default withAuth(async (req: NowRequest, res: NowResponse) => {
  console.log('BODY', req.body)
  const result = await telegraf.handleUpdate(req.body, res)
  console.log('Result', result)
})