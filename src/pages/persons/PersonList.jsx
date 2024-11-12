import { useState } from 'react';
import { Link } from 'react-router-dom';
import PersonTable from '../../components/persons/PersonTable';
import { useTheme } from '../../contexts/Theme.context';
import { IoMoonSharp, IoSunny } from 'react-icons/io5';

export default function PersonList () {

  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const { theme, toggleTheme } = useTheme();
 
  return (
    <>
      <button className="btn btn-secondary" type="button" onClick={toggleTheme}>
        {
          theme==='dark'
            ? <IoMoonSharp />
            : <IoSunny />
        }
      </button>
      <h1>Search persons</h1>
      <div className="clearfix">
        <Link to="/persons/add" className="btn btn-primary float-end">
          Add person
        </Link>
      </div>
      <div className='input-group mb-3 w-50'>
        <input
          type='search'
          id='search'
          className='form-control rounded'
          placeholder='Search'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type='button'
          className='btn btn-outline-primary'
          onClick={() => setSearch(text)}
        >
          Search
        </button>
      </div>
      <div className="mt-4">
        <PersonTable
          name={search}
        />
      </div>
    </>
  );
};


