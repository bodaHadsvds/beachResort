import React from 'react'
import { RoomFilter } from '../RoomsFilter'
import { RoomList } from '../RoomsList'
import { RoomConsumer } from '../../context'
import Loading from '../loading'
const RoomsContainer = () => {
  return (
  <RoomConsumer> 

{
      (value)=>{
        const {loading ,sortedRooms ,rooms} =value
        if(loading){
          return <Loading/>
        }
        return(
         <div>
        <RoomFilter rooms={rooms}/>
        <RoomList rooms={sortedRooms}/>
    </div>
        )
 
    }
      }
  </RoomConsumer>
  
  )
}

export default RoomsContainer