// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>,
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

const { log } = console;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {

    const reqPayload = req?.body;

    log("Req Payload: ", reqPayload);

    return res.json(reqPayload);

  }

  return res.status(500).json({
    msg: 'This must be a POST request'
  })

}