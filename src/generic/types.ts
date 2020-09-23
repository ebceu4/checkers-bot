import { NowRequest, NowResponse } from '@vercel/node'

export type RequestResponse = [NowRequest, NowResponse]

export type RequestHandler = (req: NowRequest, res: NowResponse) => void