import Post from "./components/Post";
import RevalidateButton from "./components/RevalidateButton";

type Post = { title: string; body: string; id: string };

export default async function Home() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
    { next: { tags: ["posts"] } },
  );

  const posts: Post[] = await response.json();

  return (
    <>
      <h1>Cached Posts</h1>
      {posts.map((post, i) => (
        <Post key={i} title={post.title} body={post.body} id={post.id} />
      ))}
      <RevalidateButton />
    </>
  );
}
