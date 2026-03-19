import Post from "./components/Post";

type Post = { title: string; body: string; id: string };

export default async function Home() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  const posts: Post[] = await response.json();

  return (
    <>
      <h1>DevFeed</h1>
      {posts.map((post, i) => (
        <Post key={i} title={post.title} body={post.body} id={post.id} />
      ))}
    </>
  );
}
