// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { createLead } from '@/lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {

  if (req.method === 'POST') {

    console.log("cadastro...");

    try {

      const { name, phone, where } = req.body;

      const lead = await createLead(name, phone, where);

      return res.status(201).json(lead);

    } catch (error) {

      console.error('Request error', error)
      res.status(500).json({ error: 'Error creating lead', success: false })

    }

  }

  return res.status(405).json({
    message: 'Method not allowed', success: false
  });

}