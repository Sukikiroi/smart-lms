import React from 'react'
import Categorysection from './CategorySection'
import Navbar from './Navbar'
import Newssection from './NewsSection'
import SectionA from './SectionA'
const Home = () => {
    return (
        <div>
            <Navbar/>
            <SectionA/>
            <Categorysection/>
            <Newssection/>
        </div>
    )
}

export default Home
