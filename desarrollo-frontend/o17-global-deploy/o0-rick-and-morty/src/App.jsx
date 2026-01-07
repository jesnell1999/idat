import { Route, Routes } from 'react-router';
import CharacterPage from './pages/CharacterPage';
import CharactersPage from './pages/CharactersPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/characters/:id" element={<CharacterPage />} />
    </Routes>
  );
}

export default App;
