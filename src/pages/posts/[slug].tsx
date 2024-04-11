import { getAllSlugs, findPostBySlug } from '@/lib/api/posts.api';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';
import * as dateHelper from '@/lib/helpers/date.helper';
import * as imageHelper from '@/lib/helpers/image.helper';
import { useRouter } from 'next/navigation';
import { PostWithBlurHash } from '@/types/post.type';

type Props = {
  post: PostWithBlurHash
};

export async function getStaticPaths() {
  const slugs = await getAllSlugs();
  const paths = slugs.map((slug) => {
    return { params: { slug } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug as string;
  const result = await findPostBySlug(slug);

  if (!result) {
    return {
      notFound: true,
    };
  }

  const blurHash = await imageHelper.generateBlurHash(`/images/posts/${result.image}`);
  const post = {
    ...result,
    blurHash,
    createdAt: result?.createdAt.getTime(),
  };

  return {
    props: { post },
    revalidate: 60,
  };
}

export default function PostDetailPage({ post }: Props) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-5xl py-10">
      <div className="mb-10">
        <button onClick={() => router.back()} className="btn mb-10">
          ⬅️ Back
        </button>
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <small>Posted {dateHelper.fromNow(post.createdAt)}</small>
      </div>

      <Image
        src={`/images/posts/${post.image}`}
        alt={`Image of ${post.title}`}
        width={500}
        height={300}
        priority
        quality={100}
        placeholder="blur"
        blurDataURL={post.blurHash}
        className="mb-10 rounded-xl shadow-lg"
      />

      <p>{post.excerpt}</p>
    </div>
  );
}
