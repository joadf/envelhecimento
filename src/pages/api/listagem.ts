import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    const leads = await prisma.lead.findMany();

    if (req.method === 'GET') {

        return res.status(200).json({
            data: leads
        });

    }

    return res.status(500).json({
        msg: 'This must be a GET request'
    })

}