import { createContext, useEffect, useState } from "react";
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

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(
            userPosition => {
                setLocation({
                    lat: userPosition.coords.latitude,
                    lng: userPosition.coords.longitude
                })
            },
            error => {
                console.log(error);
            }
        )
    }, [])

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