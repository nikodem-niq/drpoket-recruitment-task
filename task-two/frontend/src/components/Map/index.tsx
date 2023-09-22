import { GoogleMap, LoadScript, Polyline } from '@react-google-maps/api';
import { PathFromPoints } from '../../types/PathFromPoints';
import { useState, useEffect } from 'react';

interface MapProps {
  path: PathFromPoints
}

// further implementations: add functionality for handling more than 1 route from db

const Map: React.FC<MapProps> = ({ path }) => {
  const DEFAULT_ZOOM = 11;
  const mapsApiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY;
  const [routeCoordinates, setRouteCoordinates] = useState<{lat: number, lng: number}[]>([]);
  const [isPathShowed, setPathShowed] = useState<boolean>(false);

  useEffect(() => {
    const coordinates = path.map(point => ({
      lat: point.latitude,
      lng: point.longitude
    }));
    setRouteCoordinates(coordinates);
  }, [path, isPathShowed]);

  const handlePathShowing = () => {
    setPathShowed(true);
  }

  return (
    <div className='flex flex-col'>
      <div className='w-screen h-96 mb-12'>
        {mapsApiKey && routeCoordinates && 
          <LoadScript googleMapsApiKey={mapsApiKey}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              center={routeCoordinates[0]}
              zoom={DEFAULT_ZOOM}
            >
              {
                isPathShowed &&
                <Polyline 
                path={routeCoordinates}
                options={{
                  strokeColor: "#1e4aa8",
                  strokeOpacity: 0.7,
                  strokeWeight: 4
                }}
                />
              }
            </GoogleMap>
          </LoadScript>
        }
      </div>
      <button onClick={() => {handlePathShowing()}} disabled={isPathShowed} className='bg-blue-500 disabled:opacity-50 disabled:bg-slate-700 hover:bg-blue-700 text-white font-bold text-2xl py-2 px-4 rounded w-1/1'>Pokaż przejechaną trasę</button>
    </div>
  );
}

export default Map;