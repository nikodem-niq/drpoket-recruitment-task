import GoogleMapReact from 'google-map-react';

const Map = () => {
  const mapsApiKey = import.meta.env.VITE_REACT_GOOGLE_MAPS_API_KEY;
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

    return (
      <div className='w-screen h-96'>
        {mapsApiKey && 
        <GoogleMapReact
          bootstrapURLKeys={{ key: mapsApiKey }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}>
        </GoogleMapReact>}
      </div>
    );
  }

export default Map;
