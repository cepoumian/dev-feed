import Comments from "@/app/components/Comments";
import { Suspense } from "react";

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  const { title, body } = await response.json();

  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <Suspense fallback={<div>Loading comments...</div>}>
        <Comments id={id} />
      </Suspense>
    </div>
  );
}
