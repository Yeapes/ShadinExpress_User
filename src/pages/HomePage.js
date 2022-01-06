import React, { Component, Fragment } from 'react';
import Categories from '../components/home/Categories';
import Collection from '../components/home/Collection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import HomeTop from '../components/home/HomeTop';
import NewArrival from '../components/home/Newarraival';
class HomePage extends  Component {
    render() { 
        return(
            <Fragment>
                <HomeTop />
                <NewArrival />
                <FeaturedProducts />
                <Categories />
                <Collection />
            </Fragment>
        );
    }
}
 
export default HomePage;