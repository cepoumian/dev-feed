type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export default async function Comments({ id }: { id: string }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
  );

  const comments: Comment[] = await response.json();

  return (
    <div>
      <h3>Comments</h3>
      {comments.length > 0
        ? comments.map((comment) => <p key={comment.id}>{comment.body}</p>)
        : null}
    </div>
  );
}
