import React from 'react';
import DISHES from '../../data/dishes.js';
import MenuItem from './MenuItem.js';
import DishDetail from './DishDetail'
import { useState } from 'react';


const Menu = () =>  {

  const [dishes,setDishes] = useState(DISHES);
  const [selectedDish,setSelectedDish] = useState(null);
    



  function onDishSelect (dish) {
      
    setSelectedDish( dish );
    console.log(dish);
  
  }




   //maping the dishes into MenuItem 
   const menu = dishes.map(item=>{
        return (
           <MenuItem 
           dish={item} 
           key={item.id} 
           DishSelect={()=>onDishSelect(item)}
           />
        );
    })
  
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-6'>
              {menu}
            </div>
            <div className='col-6'>
               { selectedDish != null ? <DishDetail dish={selectedDish}/> : null }
            </div>
        </div>

      </div>
    );
  
}
export default Menu;