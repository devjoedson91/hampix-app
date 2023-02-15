import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import {
    CartContainer,
    Header,
    Title,
    InputCatogary,
    InputProduct,
    QtdContainer,
    QtdText,
    QtdInput,
    ActionsContainer,
    ButtonAdd,
    ActionsText,
    ButtonGo,
} from './styles';

import { api } from '../../services/api';

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

    function handleFinishOrder() {}

    return (
        <CartContainer>
            <Header>
                <Title>Carrinho</Title>
                <TouchableOpacity>
                    <Feather name="trash-2" size={30} color="#D73A21" />
                </TouchableOpacity>
            </Header>
        </CartContainer>
    );
}
