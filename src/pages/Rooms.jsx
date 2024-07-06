import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/banner'
import { Link } from 'react-router-dom'
import RoomsContainer from '../components/RoomContainer'
const Rooms = () => {
  return (
    <>
    <Hero hero='heroRooms'><Banner title=" Our rooms"> <Link to="/" className='btn-primary'>return home</Link></Banner></Hero>
    <RoomsContainer/>
    </>
    
  )
}

export default Rooms