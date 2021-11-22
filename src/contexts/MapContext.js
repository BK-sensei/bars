import { createContext, useEffect, useState } from "react";
import allBars from '../bars.json'

const MapContext = createContext({})

const MapContextProvider = (props) => {
    const [location, setLocation] = useState(null)
    const [bars, setBars] = useState([allBars])

    const value = {
        location,
        setLocation,
        bars,
        setBars
    }

    useEffect(() =>{
        navigator.geolocation.getCurrentPosition(
            position => {
                setLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
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