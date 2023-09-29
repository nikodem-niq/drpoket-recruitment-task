import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Subpage from './pages/Subpage';
import Counter from './pages/Counter';

// Query client, provider
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
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
