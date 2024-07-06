import React, { useContext } from 'react'
import { RoomConsumer } from '../../context'
import Title from '../Title'
//*get all unique values
const getUniqe = (items,value )=>{
    return [...new Set(items.map(item=> item[value]))]
}

export const RoomFilter = ({rooms}) => {
    const context = useContext(RoomConsumer)
    const {handleChange , type , capacity , price , minPrice , maxPrice , minSize , maxSize , pets , breakFast}= context
    //get uniqeValues
    let types =getUniqe(rooms,"type")   
    // add all 
    types =["all" ,...types]
    // map to jsx
    types = types.map((item , index) =>(
        <option key={index}>{item}</option>
    ))
    let people =getUniqe(rooms, "capacity")

    people =people.map((item ,index)=>(
        <option key={index}>{item}</option>
    ))
    console.log( minSize , maxSize , breakFast ,pets ,"extras");
  return (
    <section className='filter-container'>
     <Title title="search Rooms" />
     <form  className='filter-form'>
        {/*select type*/}
        <div className='form-group'>
     <label htmlFor="type">room type</label>
     <select name="type" id="type" value={type} className='form-control' onChange={handleChange}>
       {types}
     </select>
        </div>
            {/*select capacity*/}
            <div className='form-group'>
     <label htmlFor="capacity">Guests</label>
     <select name="capacity" id="capacity" value={capacity} className='form-control' onChange={handleChange}>
       {people}
     </select>
        </div>
        {/*select price */}
        <div className='form-group'>
            <label htmlFor="price">rooms price ${price}</label>
            <input type="range" min={minPrice} max={maxPrice} value={price} name="price" id="price"  onChange={handleChange} className='form-control'/>
        </div>
              {/*select size */}
              <div className='form-group'> 
                  <label htmlFor="price">room size  </label>
                <div className='size-inputs'> 
                         
            <input type="number"  value={minSize} name="minSize" id="minSize"  onChange={handleChange} className='size-input'/>
           
            <input type="number"  value={maxSize} name="maxSize" id="maxSize"  onChange={handleChange} className='size-input'/>
                </div>
        </div>
                  {/*extra*/}
                  <div className='form-group'> 
             
                <div className='single-extra'> 
                         
            <input type="checkbox"  name="breakFast" id="breakFast" checked={breakFast}  onChange={handleChange} className='size-input'/>
            <label htmlFor="breakFast">breakfast </label>    
            <input type="checkbox"   name="pets" id="pets"  checked={pets} onChange={handleChange} className='size-input'/>
            <label htmlFor="pets">pets</label>
                </div>
        </div>
     </form>
    </section>
  )
}
