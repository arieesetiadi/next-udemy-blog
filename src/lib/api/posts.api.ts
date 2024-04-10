import { PrismaClient, type Post } from '@prisma/client';

const prisma = new PrismaClient();

export async function getFeaturedPosts(): Promise<Post[]> {
  return prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getPosts() {}
