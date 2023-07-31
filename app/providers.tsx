"use client";

// react
import { ReactNode } from "react";

// next auth
import { SessionProvider } from "next-auth/react";

// context
import CartContextProvider from "./Context/CartContext";
import ProductContextProvider from "./Context/ProductContext";

interface ProvidersProps {
    children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <SessionProvider>
            <ProductContextProvider>
                <CartContextProvider>{children}</CartContextProvider>
            </ProductContextProvider>
        </SessionProvider>
    );
}
