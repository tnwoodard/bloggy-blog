import { useState, useEffect } from 'react';
// useState hook since list may change
import BlogList from './BlogList';

//this is the current data and state
const Home = () => {
  // what will be dynamic? the bloglist can be (an array of objects).  These are dynamic examples with set initial values!
  const [blogs, setBlogs] = useState(null);

  // const handleDelete = (id) => {
  //   // a handle delete fxn that takes a orig blog id and passes it to the children
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   //
  //   setBlogs(newBlogs);
  //   // setBlogs fxn takes on the newBlogs
  // };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
    }, []);

  // this is data and state that is packaged and passed to children
  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title='Blog List:' />}

    </div>
  );
}

export default Home;
