import { useContext } from 'react'
import { MapContext } from '../contexts/MapContext'
import GoogleMapReact from 'google-map-react'
import styled from 'styled-components'

import Loader from './Loader'
import Marker from './Marker'

const MapContainer = styled.div`
    height: 100vh;
    width: 100%;
`

const Map = () => {

    const {location, setLocation, bars, setBars} = useContext(MapContext)

    return(
        <MapContainer>
            {!location ?
                <Loader />
                :
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={location}
                    defaultZoom={14}
                >
                <Marker
                    lat={location.lat}
                    lng={location.lng}
                    bar={bars}
                    />
            </GoogleMapReact>
            }
        </MapContainer>
    )
}

export default Map