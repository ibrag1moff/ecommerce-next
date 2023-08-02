"use client";
// react
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface CartContextProviderProps {
    children: ReactNode;
}

interface CartItem {
    id: number;
    quantity: number;
}

interface CartContext {
    cartItems: CartItem[];
    getItemQuantity: (id: number) => number;
    increaseCartQuantity: (id: number) => void;
    decreaseCartQuantity: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    clearCart: () => void;
}

const CartContext = createContext({} as CartContext);

export const useCart = () => {
    return useContext(CartContext);
};

if (typeof window !== "undefined") {
    var cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
}

const CartContextProvider = ({ children }: CartContextProviderProps) => {
    const [cartItems, setCartItems] =
        useState<CartItem[]>(cartFromLocalStorage);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    );

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    };

    const increaseCartQuantity = (id: number) => {
        setCartItems((curr) => {
            if (curr.find((item) => item.id === id)?.quantity == null) {
                return [...curr, { id, quantity: 1 }];
            } else {
                return curr.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const decreaseCartQuantity = (id: number) => {
        setCartItems((curr) => {
            if (curr.find((item) => item.id === id)?.quantity == 1) {
                return curr.filter((item) => item.id !== id);
            } else {
                return curr.map((item) => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems((curr) => {
            return curr.filter((item) => item.id !== id);
        });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                getItemQuantity,
                increaseCartQuantity,
                decreaseCartQuantity,
                removeFromCart,
                cartQuantity,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
