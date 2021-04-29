import React from 'react'
import PersonCard from './PersonCard'



const PersonListCard = ({vipPerson}) => {
    return (
       <div className="list-card-vip">
           {vipPerson.map(item => {
               return (
                   <PersonCard item={item} />
               )
           })}
       </div>
    )
}

export default PersonListCard
