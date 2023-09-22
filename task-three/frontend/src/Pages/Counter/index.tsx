import { useQuery } from 'react-query'; 

const fetchUserCount = async () => {
  const response = await fetch('http://localhost:3001/api/userCount');
  const data = await response.json();
  return data.userCount;
};

function Counter() {
  const { data: userCount, isLoading, isError } = useQuery('userCount', fetchUserCount);
  if(isLoading) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Loading...</div>
  }

  if(isError) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Error, try to refresh!</div>
  }

  return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>
    Active users: {userCount}
  </div>; 
}

export default Counter;
