
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from 'react';

function App() {

  // state react
  const [search, setSearch] = useState('');

  // tanpa state
  const handleWithoutSearch = (event) => {
    event.preventDefault();
    const searchValue = event.target.search.value;
    console.log("Tanpa state:", searchValue);
  }

  // dengan state
  const handleWithSearch = (event) => {
    event.preventDefault();
    console.log("Dengan state:", search);
  }


  return (
    <>
      <div>
        <h1>Tanpa State</h1>
        <form onSubmit={handleWithoutSearch}>
          <input
            type="text"
            name="search"
            placeholder="Cari..."
          />
          <button type="submit">Cari</button>
        </form>
      </div>

      <div>
        <h1>Dengan State</h1>
        <form onSubmit={handleWithSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari..."
          />
          <button type="submit">Cari</button>
        </form>
      </div>
    </>
  )
}

export default App
