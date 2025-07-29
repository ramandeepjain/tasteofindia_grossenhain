import React, { useContext, useRef, useEffect } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from './FoodItem'
import { assets } from '../../assets/assets'


const FoodDisplay = ({category}) => {
    const {items} = useContext(StoreContext)
    const listRef = useRef(null);

    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [category]);

    return (
        <div className='food-display' id='food-display'>
            <div className="food-display-list" ref={listRef}>
                {items.map((item, index)=>{
                  if (category==="All" || category===item.category) {
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} allergies={item.allergies} category={category} />
                  }
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
