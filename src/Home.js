// useState hook since list may change
import BlogList from './BlogList';
import useFetch from './useFetch';

//this is the current data and state
const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')

 // current state - simulating a loading message, error msgs


  // this is data and state that is packaged and passed to children:
  // if is pending is true, show loading; if blogs is true return the list in its current state
  // this is conditional rendering
  return (
    <div className="home">
      {/* /* if error is a value, then print it and so forth * } */}
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title='Blog List:' />}

    </div>
  );
}

export default Home;
