import { PrismaClient, type Post } from '@prisma/client';

const prisma = new PrismaClient();

export async function getFeaturedPosts(): Promise<Post[]> {
  return prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getPosts(): Promise<Post[]> {
  return prisma.post.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

export async function getAllSlugs(): Promise<string[]> {
  const posts = await getPosts();
  const slugs = posts.map((post) => post.slug);
  return slugs;
}

export async function findPostBySlug(slug: string): Promise<Post | null> {
  return prisma.post.findFirst({
    where: { slug },
  });
}
