import React, {useState } from 'react'
import './banner.css'
import {Button } from '@material-ui/core';
import Search from  './search';
import {useHistory } from 'react-router-dom';

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);
    return (
        <div className='banner'>
            <div className='banner_search'>
                {showSearch && <Search />}

                <Button onClick={() => setShowSearch(!showSearch)}
                className='banner_searchBar' 
                variant='outlined'>
                    {showSearch ? 'Hide':'Search Dates'}
                </Button>
            </div>
            
            <div className='banner_info'>
                <h1>become a host, exercise 
                    your imagination</h1>
                <h5>doing the unexpected
                    way to dream big with a lifestyle 
                    georgeous room.
                </h5>
                <Button variant='outlined'>Explore rooms</Button>
            </div>
        </div>
    )
}

export default Banner

