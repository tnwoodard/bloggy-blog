import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // create a navbar with the component class:
    <nav className="navbar">
      <h1>Bloggy Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
   );
}

export default Navbar;
