import FeaturedPosts from '@/components/home/featured-posts';
import Hero from '@/components/home/hero';

import { getFeaturedPosts } from '@/lib/api/posts.api';
import { PostWithBlurHash } from '@/types/post.type';

import * as imageHelper from '@/lib/helpers/image.helper';

type Props = {
  featuredPosts: PostWithBlurHash[];
};

export async function getStaticProps() {
  const results = await getFeaturedPosts();
  
  const featuredPostsPromises = results.map(async (post) => {
    const blurHash = await imageHelper.generateBlurHash(`/images/posts/${post.image}`);
    return {
      ...post,
      blurHash,
      createdAt: post.createdAt.getTime(),
    };
  });

  const featuredPosts = await Promise.all(featuredPostsPromises);

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
