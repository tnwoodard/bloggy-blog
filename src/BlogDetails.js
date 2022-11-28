import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch('https://bloggy-blog-database.herokuapp.com/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('https://bloggy-blog-database.herokuapp.com/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
      history.push('/');
    })
  }

  return (
    <div className="blog-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { blog && (
          <article>
            <h2>{ blog.title }</h2>
            <p>Written by: { blog.username }</p>
            <div>{ blog.body }</div>
            <button onClick={handleClick}>Delete blog</button>
          </article>
        )}
    </div>
  );
}

export default BlogDetails;
