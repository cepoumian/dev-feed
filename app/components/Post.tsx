import LikeButton from "./LikeButton";

interface PostProps {
  title: string;
  body: string;
}

export default function Post({ title, body }: PostProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <LikeButton />
    </div>
  );
}
