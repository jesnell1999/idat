import { Route, Routes } from 'react-router';

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>HomePage</h1>} />
      <Route path="/characters" element={<h1>CharactersPage</h1>} />
      <Route path="/characters/:id" element={<h1>CharacterPage</h1>} />
    </Routes>
  );
}

export default App;
