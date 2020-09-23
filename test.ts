
import Telegraf from 'telegraf'

const telegraf = new Telegraf('1345995099:AAFlakklqYpPCuRNYibDmvfRR7w_4NB6Z2E')
telegraf.start((ctx) => ctx.reply('Welcome'))
telegraf.help((ctx) => ctx.reply('Send me a sticker'))
telegraf.on('sticker', (ctx) => ctx.reply('👍'))
telegraf.hears('hi', (ctx) => ctx.reply('Hey there'))

