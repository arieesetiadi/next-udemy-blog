import { Post } from '@/types/post.type';
import PostList from '../posts/post-list';

type Props = {
  posts: Post[];
};

function FeaturedPosts({ posts }: Props) {
  return (
    <div className="mx-auto max-w-5xl py-10">
      <h2 className="text-center text-2xl font-bold mb-10">Featured Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}

export default FeaturedPosts;
