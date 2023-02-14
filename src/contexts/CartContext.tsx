import { useState, createContext, ReactNode } from 'react';
import { api } from '../services/api';

interface Product {
    id: string;
    name: string;
    price: string;
    banner: string;
    amount: number;
    total: number;
}

interface CartContextData {
    cart: Product[];
    addItemCart: (productId: string) => Promise<void>;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<Product[]>([]);

    async function addItemCart(productId: string) {
        const updateCart = [...cart];
        const productExists = updateCart.findIndex((product) => product.id === productId);

        const stock = await api.get('/product', { params: { product_id: productId } });

        if (productExists !== -1) {
            updateCart[productExists].amount = updateCart[productExists].amount + 1;
            updateCart[productExists].total =
                updateCart[productExists].amount * Number(updateCart[productExists].price);

            setCart(updateCart);

            return;
        }

        const newProduct = {
            ...stock.data,
            amount: 1,
            total: Number(stock.data.price),
        };

        updateCart.push(newProduct);

        setCart(updateCart);
    }

    return <CartContext.Provider value={{ cart, addItemCart }}>{children}</CartContext.Provider>;
}
