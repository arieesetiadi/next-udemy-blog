import { ContactMessage } from '@/types/contact.type';
import { type ContactMessage as ContactMessagePrisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function storeContactMessage(contactMessage: ContactMessage): Promise<ContactMessagePrisma> {
  return await prisma.contactMessage.create({
    data: contactMessage,
  });
}
