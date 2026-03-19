import Link from "next/link";
import LikeButton from "./LikeButton";

interface PostProps {
  title: string;
  body: string;
  id: string;
}

export default function Post({ title, body, id }: PostProps) {
  return (
    <div>
      <Link href={`/posts/${id}`}>
        <h2>{title}</h2>
      </Link>

      <p>{body}</p>
      <LikeButton />
    </div>
  );
}
