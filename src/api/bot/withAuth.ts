import { NowRequest, NowResponse } from '@vercel/node'
import { RequestHandler } from '../../types'

export const withAuth = (handler: RequestHandler) => (req: NowRequest, res: NowResponse) => {
  if (req.query.token !== process.env.BOT_TOKEN) {
    res.status(401).end()
    return
  }

  handler(req, res)
}