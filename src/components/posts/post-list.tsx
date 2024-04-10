import type { Post } from '@/types/post.type';
import PostItem from './post-item';

type Props = {
  posts: Post[];
};

function PostList({ posts }: Props) {
  return (
    <div className="grid grid-cols-3 gap-10">
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
}

export default PostList;
