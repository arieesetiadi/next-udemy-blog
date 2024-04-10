import FeaturedPosts from '@/components/home/featured-posts';
import Hero from '@/components/home/hero';

import posts from '@/../data/posts.json';

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export default HomePage;
