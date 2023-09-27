import { useQuery } from "react-query";
import Map from "../../components/Map";
import { PathFromPoints } from "../../types/PathFromPoints";
import { BACKEND_URL } from "../../constants/constants";
import { useEffect, useState } from "react";
import { getRandomHexColor } from "../../utils/helpers";

interface Path {
  _id: number;
  points: PathFromPoints;
}

const fetchPaths = async () => {
  const response = await fetch(`${BACKEND_URL}/path`, {
    headers: {
      method: 'GET'
    }
  });
  const data = await response.json();
  return data.paths;
};

const MyPath = () => {
  const [currentPath, setCurrentPath] = useState<PathFromPoints | undefined>(undefined);
  const { data: paths, isLoading, isError } = useQuery('userPath', fetchPaths);

  if(isLoading) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Loading data...</div>
  }

  if(isError) {
    return <div className='w-80vw flex items-center justify-center py-10 text-3xl'>Error, try to refresh! (connection with backend couldn't be esablished)</div>
  }

  return (
  <>
    <div className="w-80vw flex items-center justify-center py-10 text-3xl">
        <Map path={currentPath}/>
    </div>
    <div className="flex flex-col items-center h-screen">
      <span className="text-2xl">Twoje zapisane trasy</span>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-3 md:grid-rows-2 gap-4 h-1/2 w-4/5 mx-auto">
        {paths.map((path : Path) => <PathCard key={path._id} data={path} setCurrentPath={setCurrentPath}/>)}
      </div>
    </div>
  </>
  );
}

const PathCard = ({ data, setCurrentPath } : any) => {
  const [isPathShown, setPathShown] = useState<boolean>(false);

  return (
    <div className="bg-slate-100 flex flex-col items-center justify-around row-span-1 col-span-1 rounded-3xl">
      <button
        onClick={() => {setCurrentPath(data.points.map((point: any) => {return {lng: point.longitude, lat: point.latitude}})); setPathShown(true);}}
        className={ isPathShown ? "bg-slate-700 text-white font-bold text-lg py-2 px-4 rounded w-full" :"hover:bg-blue-500 bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded w-full"}
        disabled={isPathShown}
      >
        {isPathShown ? "Trasa została zaznaczona" : "Pokaż trasę"}
      </button>
      <span className="mb-5 ml-2 mr-2 text-lg">Nazwa trasy: {data.titleOfPath ? data.titleOfPath : 'Nie znaleziono nazwy'}</span>
    </div>
  )
}

export default MyPath;
