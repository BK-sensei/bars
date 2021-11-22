import { createContext, useState } from "react";
import allBars from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = (props) => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState([allBars])

    const value = {
        location,
        bars
        // location: location
        // bars: bars
    }

    return(
        <MapContext.Provider value={value}>
            {props.children}
        </MapContext.Provider>
    )
}

export {
    MapContext,
    MapContextProvider
}