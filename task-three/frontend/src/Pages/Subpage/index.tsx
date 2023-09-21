import { useEffect } from 'react'; 
import io from 'socket.io-client';

function Subpage() {
  useEffect(() => {
    const socket = io('http://localhost:3001'); 
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
  <div className="w-80vw flex items-center justify-center py-10 text-3xl">
      Subpage
  </div>
  );
}

export default Subpage;
