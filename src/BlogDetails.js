import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPanding,
    error,
  } = useFetch("http://localhost:8000/Blogs/" + id);
  const history = useHistory();

  const handleDeleteBlog = () => {
    fetch("http://localhost:8000/Blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPanding && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author} </p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={handleDeleteBlog}>Delete blog</button>
    </div>
  );
};

export default BlogDetails;
