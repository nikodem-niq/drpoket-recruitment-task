import { useState, useEffect } from 'react'; 
import io from 'socket.io-client';

function Counter() {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const socket = io('http://localhost:3001'); 

    socket.on('userCount', (count) => {
      setUserCount(count);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>
    Active users: {userCount}
  </div>;
}

export default Counter;
