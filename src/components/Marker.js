import styled from "styled-components"

import { FaMapMarkerAlt } from 'react-icons/fa'

const MarkerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
`

const Marker = (props) => {
    return (
        <MarkerContainer>
            <FaMapMarkerAlt style={{ 
                    width: '40px', 
                    height: '40px', 
                    color: "coral", 
                    position: "absolute", 
                    bottom: '100%', 
                    left: '-20px' 
                }} 
            />
        </MarkerContainer>
    );
}

export default Marker;