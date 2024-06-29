import React from 'react'
import './FoodDisplay.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
const FoodDisplay = ({category}) => {

  const {food_list}=useContext(StoreContext)
  console.log(food_list)
  return (
    <div className='food-display' id='food-display'>
    <h2>Top dishes near you</h2>
    <div className="food-display-list">
      {food_list.map((item,index)=>{
        if(category==='All'||category===item.category){
          console.log(item._id)
          return <FoodItem key={index} foodid={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        }
       
      })}
    </div>
    </div>
  )
}

export default FoodDisplay