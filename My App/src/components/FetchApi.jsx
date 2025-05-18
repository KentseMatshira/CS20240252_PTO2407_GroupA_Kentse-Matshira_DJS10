import { React, useState, useEffect } from "react";

export default function FetchAllBlogPosts() {
  const { error, setError } = useState(null);
  const { blogPost, setBlogPost } = useState(null);

  useEffect(() => {
    // Grabbing data from Api
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => console.log(data))
      //   Checking if any errors occur when grabbing data
      .catch((error) => setError("Data fetching failed", error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <h2></h2>
      <h3></h3>
    </div>
  );
}
