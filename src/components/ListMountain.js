import React from 'react'
import Mountain from './Mountain';
import "./Mountain.css";

const ListMountain = ({destinations}) => {
    return (
        <div className="mountain-container">
            {destinations.map(mountain => {
                return <Mountain {...mountain} />
            })}
        </div>
    )
}

export default ListMountain
