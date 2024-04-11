import PostList from '@/components/posts/post-list';
import type { Post } from '@prisma/client';
import { getPosts } from '@/lib/api/posts.api';

type Props = {
  posts: Post[];
};

export async function getStaticProps() {
  const results = await getPosts();
  const posts = results.map((post) => {
    return { ...post, createdAt: post.createdAt.getTime() };
  });

  return {
    props: { posts },
    revalidate: 60,
  };
}

export default function PostsPage({ posts }: Props) {
  return (
    <div className="mx-auto max-w-5xl py-10">
      <h2 className="mb-10 text-center text-2xl font-bold">Posts</h2>
      <PostList posts={posts} />
    </div>
  );
}
