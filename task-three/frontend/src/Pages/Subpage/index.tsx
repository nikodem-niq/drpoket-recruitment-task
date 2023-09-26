import { useEffect } from 'react'; 
import io from 'socket.io-client';
import Navbar from '../../components/Navbar';

function Subpage() {
  useEffect(() => {
    const socket = io('http://localhost:3001'); 
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
  <>
    <Navbar/>
    <div className="w-80vw flex items-center justify-center py-10 text-3xl">
        Subpage
    </div>
  </>
  );
}

export default Subpage;
