import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Subpage from './Pages/Subpage';
import Counter from './Pages/Counter';

// Query client, provider
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task3/subpage" element={<Subpage />} />
          <Route path="/task3/counter" element={<Counter />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
