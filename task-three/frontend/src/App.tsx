import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Subpage from './Pages/Subpage';
import Counter from './Pages/Counter';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task3/subpage" element={<Subpage />} />
        <Route path="/task3/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
