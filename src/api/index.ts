import { NowRequest, NowResponse } from '@vercel/node'

module.exports = (req: NowRequest, res: NowResponse) => {
  const {
    query: { name },
  } = req

  res.send(process.env)
}