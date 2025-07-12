import { createContext, useState } from "react";
import { items } from "../components/Menu/MenuList/menu-items";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = items.find((product) => product._id === Number(item));
                if (itemInfo) {
                    // Convert price string like '14,99' to number 14.99
                    const price = parseFloat(itemInfo.price.replace(',', '.'));
                    totalAmount += price * cartItems[item];
                }
            }
        }
        return Math.round(totalAmount * 10) / 10;;
    }

    const contextValue = {
        items,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;