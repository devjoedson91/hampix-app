import React, { useState, useEffect, useContext } from 'react';
import { TouchableOpacity, FlatList, Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CartContext } from '../../contexts/CartContext';
import { formatPrice } from '../../util/format';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    CartContainer,
    Header,
    Title,
    AreaDescription,
    ImageItem,
    ItemsContainer,
    Section,
    DescriptionBlock,
    NameProduct,
    Price,
    NoCartContainer,
    NoCartText,
} from './styles';

import { api } from '../../services/api';
import { Loading } from '../../components/Loading';

export function Cart() {
    // adicionando um item ao pedido

    // async function handleAddItem() {
    //     const response = await api.post('/order/add', {
    //         order_id: route.params?.order_id,
    //         product_id: productSelected?.id,
    //         amount: Number(amount),
    //     });

    //     let data = {
    //         id: response.data.id,
    //         product_id: productSelected?.id as string,
    //         name: productSelected?.name as string,
    //         amount: amount,
    //     };

    //     setItems((oldArray) => [...oldArray, data]);
    // }

    // excluindo item da order

    // async function handleDeleteItem(item_id: string) {
    //     await api.delete('order/remove', {
    //         params: { item_id: item_id },
    //     });

    //     // apos remover da api, removemos esse item da lista

    //     let removeItem = items.filter((item) => {
    //         return item.id !== item_id;
    //     });

    //     setItems(removeItem);
    // }

    const { cart, removeCart } = useContext(CartContext);

    const [loading, setLoading] = useState(false);

    function handleFinishOrder() {}

    function clearAppData() {
        Alert.alert('Carrinho de compras', 'Deseja realmente remover os itens do carrinho?', [
            {
                text: 'SIM',
                onPress: async () => {
                    setLoading(true);
                    try {
                        await AsyncStorage.removeItem('@hampix:cart');

                        removeCart();

                        setLoading(false);
                    } catch (error) {
                        console.log('Error clearing app data.');
                        setLoading(false);
                    }
                },
            },
            {
                text: 'NÃO',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
        ]);
    }

    if (loading) {
        return <Loading />;
    }

    if (cart.length === 0) {
        return (
            <NoCartContainer>
                <NoCartText>Seu carrinho está vazio!</NoCartText>
            </NoCartContainer>
        );
    }

    return (
        <CartContainer>
            <Header>
                <Title>Carrinho</Title>
                <TouchableOpacity onPress={clearAppData}>
                    <Feather name="trash-2" size={30} color="#D73A21" />
                </TouchableOpacity>
            </Header>
            <Section>
                <FlatList
                    data={cart}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ItemsContainer>
                            <AreaDescription>
                                <ImageItem
                                    source={{ uri: `${item.banner}` }}
                                    resizeMode="stretch"
                                />
                                <DescriptionBlock>
                                    <NameProduct>{item.name}</NameProduct>
                                    <Price>{formatPrice(Number(item.price))}</Price>
                                </DescriptionBlock>
                            </AreaDescription>
                        </ItemsContainer>
                    )}
                />
            </Section>
        </CartContainer>
    );
}
