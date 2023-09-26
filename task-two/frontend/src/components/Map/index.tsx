import { GoogleMap, Polyline, useJsApiLoader } from '@react-google-maps/api';
import { PathFromPoints } from '../../types/PathFromPoints';
import { getRandomHexColor } from '../../utils/helpers';

interface MapProps {
  path: PathFromPoints | undefined,
}

const Map: React.FC<MapProps> = ({ path }) => {
  const DEFAULT_ZOOM = 10;
  const mapsApiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: mapsApiKey,
    libraries: ['geometry', 'drawing'],
  });

  return (
    <div className='flex flex-col'>
      <div className='w-screen h-96 mb-12'>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{
              lat: 37.38029, lng: -122.075106
            }}
            zoom={DEFAULT_ZOOM}
          >
            {path && (
              <Polyline
                path={path}
                options={{
                  strokeColor: getRandomHexColor(),
                  strokeOpacity: 0.7,
                  strokeWeight: 4
                }}
              />
            )}
          </GoogleMap>
        )}
      </div>
    </div>
  );
}

export default Map;
