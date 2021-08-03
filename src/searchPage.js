import React from 'react'
import './searchPage.css'
import {Button } from '@material-ui/core'
import SearchResult from './searchResult'


import bat from '../src/images/baty.jpg'
import room from '../src/images/outi.jpg'
import Liv from '../src/images/options.jpg'
import roomy from '../src/images/inneri.jpg'
import option from '../src/images/option.jpg'

function searchPage() {
    return (
        <div className='searchPage'> 
           <div className='searchPage_info'>
               <p>22 stays | 26 august to 30 august | 2 guest</p>
               <h1>Stay nearby</h1> 
               <Button variant='outlined'>Cancelation</Button>
               <Button variant='outlined'>place</Button>
               <Button variant='outlined'>price</Button>
               <Button variant='outlined'>rooms</Button>
               <Button variant='outlined'>More</Button>
               <div>
                   <SearchResult
                        img={room}
                        location=''
                        title=''
                        description=''
                        star={4.0}
                   />
                    <SearchResult
                        img={Liv}
                        location=''
                        title=''
                        description=''
                        star={3.85}
                        price='R899 / night'
                        total='R2899 total'
                   />
                       <SearchResult
                        img={roomy}
                        location=''
                        title=''
                        description=''
                        star={3.85}
                        price='R599 / night'
                        total='R1799 total'
                   />
                       <SearchResult
                        img={bat}
                        location=''
                        title=''
                        description=''
                        star={3.85}
                        price='R482 / night'
                        total='R998 total'
                   />
                       <SearchResult
                        img={option}
                        location=''
                        title=''
                        description=''
                        star={3.85}
                        price='R482 / night'
                        total='R998 total'
                   />
                       <SearchResult
                        img={roomy}
                        location=''
                        title=''
                        description=''
                        star={3.85}
                        price='R399 / night'
                        total='R899 total'
                   />
               </div>
           </div>
        </div>
    )
}

export default searchPage
