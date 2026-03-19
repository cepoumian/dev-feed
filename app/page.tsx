import Post from "./components/Post";

type post = { title: string; body: string };

export default async function Home() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  );
  const posts: post[] = await response.json();

  return (
    <>
      <h1>DevFeed</h1>
      {posts.map((post, i) => (
        <Post key={i} title={post.title} body={post.body} />
      ))}
    </>
  );
}
