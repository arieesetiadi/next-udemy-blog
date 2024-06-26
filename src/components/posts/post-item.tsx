import Image from 'next/image';
import * as dateHelper from '@/lib/helpers/date.helper';
import Link from 'next/link';
import { PostWithBlurHash } from '@/types/post.type';

type Props = {
  post: PostWithBlurHash;
};

function PostItem({ post }: Props) {
  const isWithinAWeek = dateHelper.isWithinDays(post.createdAt, 7);

  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <Image
            src={`/images/posts/${post.image}`}
            alt={`Image of ${post.title}`}
            width={500}
            height={200}
            quality={90}
            placeholder="blur"
            blurDataURL={post.blurHash}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title items-start">{post.title}</h2>
          <p className="mb-5">{post.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-3">{dateHelper.fromNow(post.createdAt)}</div>
            {isWithinAWeek && <div className="badge badge-primary p-3">New</div>}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
