import PostList from '../posts/post-list';
import { Post } from '@prisma/client';

type Props = {
  posts: Post[];
};

function FeaturedPosts({ posts }: Props) {
  return (
    <div className="mx-auto max-w-5xl py-10">
      <h2 className="mb-10 text-center text-2xl font-bold">Featured Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default FeaturedPosts;
