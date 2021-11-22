import React from 'react';
import { MapContextProvider } from './contexts/MapContext';
import Map from './components/Map';

const App = () => {
  
  return (
    <MapContextProvider>
      <Map />
    </MapContextProvider>
  );
}

export default App;
