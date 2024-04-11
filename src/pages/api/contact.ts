import { ContactMessage } from '@/types/contact.type';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const contactMessage = req.body as ContactMessage;

    // TODO: Store to the actual database (Prisma)

    res.status(201).json({
      status: 201,
      message: 'SUCCESS',
      data: { contactMessage },
    });
  }
}
