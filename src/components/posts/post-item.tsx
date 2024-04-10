import { Post } from '@prisma/client';
import Image from 'next/image';
import dayjs from 'dayjs';
import * as dateHelper from '@/lib/helpers/date.helper';
import Link from 'next/link';

type Props = {
  post: Post;
};

function PostItem({ post }: Props) {
  const isWithinAWeek = dateHelper.isWithinDays(post.createdAt, 7);

  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <Image
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt={`Image of ${post.title}`}
            width={500}
            height={200}
            quality={90}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title items-start">{post.title}</h2>
          <p className="mb-5">{post.title}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline p-3">{dateHelper.fromNow(post.createdAt)}</div>
            {isWithinAWeek && <div className="badge badge-secondary p-3">New</div>}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
