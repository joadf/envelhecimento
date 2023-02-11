import type { NextApiRequest, NextApiResponse } from 'next'

import { getAllLeads } from '@/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

    if (req.method === 'GET') {

        console.log("listagem...");

        try {

            const leads = await getAllLeads();

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