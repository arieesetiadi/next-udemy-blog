import { ContactMessage } from '@/types/contact.type';
import type { NextApiRequest, NextApiResponse } from 'next';
import * as contactService from '@/lib/services/contact.service'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == 'POST') {
    const contactMessageBody = req.body as ContactMessage;

    const contactMessage = await contactService.storeContactMessage(contactMessageBody);

    res.status(201).json({
      status: 201,
      message: 'SUCCESS',
      data: { contactMessage },
    });
  }
}
