import { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('')

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form action="">
        <label>Blog title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        <label>Blog body:</label>
        <textarea
          required
        ></textarea>
        <label>Blog username:</label>
        <select>
          <option value="Tempestt W.">Tempestt W.</option>
          <option value="Cesar M.">Cesar M.</option>
          <option value="Techguru">Techguru</option>
        </select>
        <button>
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default Create
