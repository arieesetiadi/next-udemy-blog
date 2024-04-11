import { Post } from '@prisma/client';

export type PostWithBlurHash = Post & {
  blurHash?: string;
};
