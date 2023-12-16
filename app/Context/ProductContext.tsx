"use client";

// react
import {
    ReactNode,
    createContext,
    useContext,
    useState,
    useEffect,
} from "react";

// types
import { Product } from "@/types/interfaces";

interface ProductContextProps {
    children: ReactNode;
}

interface ProductContext {
    products: Product[];
}

const ProductContext = createContext({} as ProductContext);

export const useProduct = () => {
    return useContext(ProductContext);
};

export default function ProductContextProvider({
    children,
}: ProductContextProps) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products }}>
            {children}
        </ProductContext.Provider>
    );
}
