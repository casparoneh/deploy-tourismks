import React from 'react'
import PopularToursList from '../components/PopularToursList'
import Title from '../components/Title'
import WhyHikingList from '../components/WhyHikingList'

const Home = ({exploreData,whyHiking}) => {
    return (
        <div>
            <Title title="Popular Tours" />
            <PopularToursList exploreData={exploreData} />
            <Title title="Why hiking?" />
            <WhyHikingList whyHiking={whyHiking}/>
            
        </div>
    )
}

export default Home
