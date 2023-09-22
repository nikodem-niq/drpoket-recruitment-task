import { useQuery } from "react-query";
import Map from "../../components/Map";

const fetchPaths = async () => {
  const response = await fetch('http://localhost:3002/path/', {
    headers: {
      method: 'GET'
    }
  });
  const data = await response.json();
  return data.paths[0];  // mocked that 1st element is the path we are looking for
};

const MyPath = () => {
  const { data: userPath, isLoading, isError } = useQuery('userPath', fetchPaths);
  if(isLoading) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Loading data...</div>
  }

  if(isError) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Error, try to refresh!</div>
  }

  return (
  <div className="w-80vw flex items-center justify-center py-10 text-3xl">
      <Map path={userPath.points}/>
  </div>
  );
}

export default MyPath;
