/* eslint react-refresh/only-export-components: ["warn", { "allowConstantExport": true }] */

import { createContext, useState } from "react";
import { items } from "../components/Menu/MenuList/menu-items";

export const StoreContext = createContext(null);

// ---- Offer config ----
const OFFER_CATEGORIES = new Set(["Vegetarisch", "Chicken"]);
const OFFER_PRICE = 9.90; // "9,90" as a Number

// Helper: lunch time = before 15:00 local time
const isLunchTime = (d = new Date()) => d.getHours() < 14;

// Helper: category qualifies for offer
const isOfferCategory = (category) => OFFER_CATEGORIES.has(category);

// Helper: convert price strings like '14,99' or '14,99 €' to Number 14.99
const normalizePrice = (p) =>
  parseFloat(String(p).replace(/[^\d.,]/g, "").replace(",", ".") || "0");

// Single source of truth for an item's current price
const getEffectivePrice = (item) => {
  const base = normalizePrice(item?.price);
  if (item && isLunchTime() && isOfferCategory(item.category)) {
    return OFFER_PRICE;
  }
  return base;
};

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const id in cartItems) {
      const qty = cartItems[id];
      if (qty > 0) {
        const itemInfo = items.find((product) => product._id === Number(id));
        if (itemInfo) {
          const price = getEffectivePrice(itemInfo);
          totalAmount += price * qty;
        }
      }
    }

    // round to cents
    return Math.round(totalAmount * 100) / 100;
  };

  // Handy for showing per-item prices in the UI
  const getItemEffectivePrice = (itemId) => {
    const itemInfo = items.find((p) => p._id === Number(itemId));
    return itemInfo ? getEffectivePrice(itemInfo) : 0;
  };

  const contextValue = {
    items,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getItemEffectivePrice,
    // exporting these if the UI needs to show badges, etc.
    isLunchTime,
    isOfferCategory,
    OFFER_PRICE,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
