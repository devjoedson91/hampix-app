import { useState, createContext, ReactNode } from 'react';
import { api } from '../services/api';

export interface Product {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
    amount: number;
    total: number;
}

interface UpdateProductAmount {
    productId: string;
    amount: number;
}

interface CartContextData {
    cart: Product[];
    addItemCart: (productId: string) => Promise<void>;
    removeItemCart: (productId: string) => void;
    updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
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

    function removeItemCart(productId: string) {
        try {
            const updateCart = [...cart];
            const indexItem = updateCart.findIndex((product) => product.id === productId);

            if (indexItem >= 0) {
                updateCart.splice(indexItem, 1);
                setCart(updateCart);
            } else {
                throw Error();
            }
        } catch (err) {
            console.log('Erro: ', err);
        }
    }

    async function updateProductAmount({ productId, amount }: UpdateProductAmount) {
        try {
            if (amount <= 0) return;

            const updateCart = [...cart];
            const productExists = updateCart.find((product) => product.id === productId);

            if (productExists) {
                productExists.amount = amount;

                productExists.total = productExists.amount * Number(productExists.price);
                setCart(updateCart);
            } else {
                throw Error();
            }
        } catch (err) {
            console.log('Erro na alteração de quantidade do produto: ', err);
        }
    }

    return (
        <CartContext.Provider value={{ cart, addItemCart, removeItemCart, updateProductAmount }}>
            {children}
        </CartContext.Provider>
    );
}
