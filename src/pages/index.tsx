import FeaturedPosts from '@/components/home/featured-posts';
import Hero from '@/components/home/hero';

import { getFeaturedPosts } from '@/lib/api/posts.api';
import { Post } from '@prisma/client';

type Props = {
  featuredPosts: Post[];
};

export async function getStaticProps() {
  const results = await getFeaturedPosts();
  const featuredPosts = results.map((post) => {
    return { ...post, createdAt: post.createdAt.getTime() };
  });

  return {
    props: { featuredPosts },
    revalidate: 60,
  };
}

export default function HomePage({ featuredPosts }: Props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  );
}
