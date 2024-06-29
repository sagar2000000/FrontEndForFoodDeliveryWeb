import React, { useContext} from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({foodid,name,price,description,image}) => {


const {cartItems,addToCart,removeFromCart}=useContext(StoreContext)

  return (
    <div className='food-item' id='food-item'>
      <div className="food-item-img-container">
        <img  className="food-item-image" src={image} alt=""  />

        {!cartItems[foodid]
        ?<img  className='add' onClick={()=>addToCart(foodid)} src={assets.add_icon_white}  alt="" />
        : <div className='food-item-counter'>
      
        
          <img onClick={()=>removeFromCart(foodid)} src={assets.remove_icon_red} alt="" />
         
          <p>{cartItems[foodid]}</p>
          <img  onClick={()=>addToCart(foodid)} src={assets.add_icon_green} alt="" />
        </div>
}
        
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
      </div>
      <p className="food-item-desc">{description}</p>
      <p className="food-item-price">रु{price}</p>
    </div>
  )
}

export default FoodItem