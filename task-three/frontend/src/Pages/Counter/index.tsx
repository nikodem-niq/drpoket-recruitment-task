import { useQueryClient, useQuery } from 'react-query'; 
import Navbar from '../../components/Navbar';

const fetchUserCount = async () => {
  const response = await fetch('http://localhost:3001/api/userCount');
  const data = await response.json();
  return data.userCount;
};

const Counter = () => {
  const queryClient = useQueryClient();
  const { data: userCount, isLoading, isError } = useQuery('userCount', fetchUserCount, {
    initialData: queryClient.getQueryData('userCount'),
    refetchIntervalInBackground: true,
    refetchInterval: 5000
  });

  if(isLoading) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Loading...</div>
  }

  if(isError) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Error, try to refresh!</div>
  }

  return(
  <>
    <Navbar/>
    <div className='w-80vw flex items-center justify-center py-10 text-3xl'>
      Active users: {userCount}
    </div>
  </>
  )
}

export default Counter;
