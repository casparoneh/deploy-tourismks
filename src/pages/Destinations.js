import React from 'react'
import ListMountain from '../components/ListMountain';
import Title from "../components/Title";

const Destinations = ({destinations}) => {
    return (
        <div>
            <Title title="Mountains to visit" />
            <ListMountain  destinations={destinations} />
        </div>
    )
}

export default Destinations
