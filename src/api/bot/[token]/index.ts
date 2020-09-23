import Telegraf from 'telegraf'
import { withAuth } from '../withAuth'

const telegraf = new Telegraf(process.env.BOT_TOKEN!)
telegraf.start((ctx) => ctx.reply('Welcome'))
telegraf.help((ctx) => ctx.reply('Send me a sticker'))
telegraf.on('sticker', (ctx) => ctx.reply('👍'))
telegraf.hears('hi', (ctx) => ctx.reply('Hey there'))

export default withAuth(telegraf.webhookCallback(`/api/bot/${process.env.BOT_TOKEN!}`))