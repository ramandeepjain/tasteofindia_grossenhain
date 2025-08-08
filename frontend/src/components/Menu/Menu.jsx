import React, { useState } from 'react';
import MenuCategory from './MenuCategory/MenuCategory';
import MenuList from './MenuList/MenuList';

const Menu = () => {
    const [category, setCategory] = useState("Chicken");

    const changeCategory = (newCategory) => {
        setCategory(newCategory);  // Function to update the state
    };

    return (
        <div>
            <MenuCategory category={category} changeCategory={changeCategory} />
            <MenuList category={category} changeCategory={changeCategory} />
        </div>
    );
};

export default Menu;
