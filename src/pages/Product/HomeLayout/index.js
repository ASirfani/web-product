import React from 'react'
import HomeSection from '../../../component/HomeSection'

const HomeLayout = () => {
    return (
        <>
            <HomeSection title={"new Product"} />
            <HomeSection title={"Top selling"} />
            <HomeSection title={"Offers"} />
            <HomeSection title={"All Products"} />
        </>
    )
}

export default HomeLayout