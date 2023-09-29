import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MyPath from './pages/MyPath';

// Query client, provider
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-path" element={<MyPath />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
