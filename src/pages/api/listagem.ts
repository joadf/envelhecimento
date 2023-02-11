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

        } catch (error) {

            console.error('Request error', error)
            res.status(500).json({ error: 'Error listing leads', success: false })
      
          }

    }

    return res.status(405).json({
        message: 'Method not allowed', success: false
    });

}