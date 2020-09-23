import { NowRequest, NowResponse } from '@vercel/node'
import Telegraf from 'telegraf'
import { withAuth } from '../withAuth'

export default withAuth((req: NowRequest, res: NowResponse) => {
  const {
    query: { name },
  } = req




  res.send('OK')
})