import React from 'react'
import './home.css'
import Banner from './banner'
import Card from './card'

import img from '../src/images/rooms.jpg'
import imgs from '../src/images/roomies.jpg'
import imge from '../src/images/liv.jpg'

import imgy from '../src/images/outies.jpg'
import imgg from '../src/images/inn.jpg'
import imgj from '../src/images/outie.jpg'

function home() {
    return (
        <div className='home'>
            <Banner/>
            <div className='home_section'>
                <Card 
                    src={img}
                    title='Unique stay'
                    description='Specious, private with 
                    historical touch' />
                <Card
                    src={imgs}
                    title='Lifetime expercience'
                    description='Comfortable, private place
                    suitable for family or friends' />
                <Card 
                    src={imge}
                    title='Better for you'
                    description='Comfortable, made perfect
                    for couple and very private'/>
            </div>
            <div className='home_section'>
                <Card
                src={imgy}
                title='Studio Arpartment'
                description='R895/night' />
                <Card
                    src={imgg}
                    title='Luxury Penthouse'
                    description='R2599/night' />
                <Card 
                    src={imgj}
                    title='Luxury Penthouse'
                    description='R1895/night'/>
            </div>
        </div>
    )
}

export default home
