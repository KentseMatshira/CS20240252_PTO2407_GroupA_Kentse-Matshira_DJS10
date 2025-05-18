import { React, useState, useEffect } from "react";

export default function FetchAllBlogPosts() {
  const { error, setError } = useState(null);
  const { blogPost, setBlogPost } = useState(null);
  const { isloading, setIsLoading } = useState(false);

  useEffect(() => {
    async function loadBlogs() {
      try {
        setIsLoading(true);
        // Fetching blog posts dat
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await data.json();

        setBlogPost(json);
        console.log(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    loadBlogs();
  }, []);

  if (isloading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <h2></h2>
      <h3></h3>
    </div>
  );
}
