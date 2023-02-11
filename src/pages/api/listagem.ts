import type { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    if (req.method === 'GET') {

        try {

            const leads = await prisma.lead.findMany();

            return res.status(200).json({
                data: leads
            });

        } catch (err) {

            return res.status(500).json({
                err
            });

        }

    }

    return res.status(500).json({
        msg: 'This must be a GET request'
    })

}