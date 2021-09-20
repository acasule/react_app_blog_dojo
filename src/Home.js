import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPanding,
    error,
  } = useFetch("http://localhost:8000/Blogs");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPanding && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

// fetch(
//     "http://www.omdbapi.com/?t=%22%20+%20terminator%20+%20%22&apikey=8c092c76")
