import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

// Query client, provider
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
