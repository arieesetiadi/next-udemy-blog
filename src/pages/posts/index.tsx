import PostList from '@/components/posts/post-list';
import { getPosts } from '@/lib/api/posts.api';

import * as imageHelper from '@/lib/helpers/image.helper';
import { PostWithBlurHash } from '@/types/post.type';

type Props = {
  posts: PostWithBlurHash[];
};

export async function getStaticProps() {
  const results = await getPosts();

  const postsPromises = results.map(async (post) => {
    const blurHash = await imageHelper.generateBlurHash(`/images/posts/${post.image}`);
    return {
      ...post,
      blurHash,
      createdAt: post.createdAt.getTime(),
    };
  });

  const posts = await Promise.all(postsPromises);

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
