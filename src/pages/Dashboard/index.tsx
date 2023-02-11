import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../../routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, Modal, FlatList } from 'react-native';
import { Container, CategoryTitle, InputCatogary } from './styles';
import { ModalPicker } from '../../components/ModalPicker';

// import { AuthContext } from '../../contexts/AuthContext';

import { api } from '../../services/api';

export type CategoryProps = {
    id: string;
    name: string;
};

type ProductProps = {
    id: string;
    name: string;
};

type ItemProps = {
    id: string;
    product_id: string;
    name: string;
    amount: string | number;
};

export default function Dashboard() {
    // const { signOut } = useContext(AuthContext);

    const navigation = useNavigation<NativeStackNavigationProp<StackParamsList>>();

    const [category, setCategory] = useState<CategoryProps[]>([]);

    const [categorySelected, setCategorySelected] = useState<CategoryProps | undefined>();

    const [products, setProducts] = useState<ProductProps[] | []>([]);

    const [productSelected, setProductSelected] = useState<ProductProps | undefined>();

    const [modalCategoryVisible, setModalCategoryVisible] = useState(false);

    async function loadCategories() {
        const response = await api.get('/category');

        setCategory(response.data);
        setCategorySelected(response.data[0]);
    }

    async function loadProducts() {
        const response = await api.get('/category/product', {
            params: { category_id: categorySelected?.id },
        });

        setProducts(response.data);
        setProductSelected(response.data[0]);
    }

    useEffect(() => {
        loadCategories();
    }, []);

    useEffect(() => {
        loadProducts();
    }, [categorySelected]);

    function handleChangeCategory(item: CategoryProps) {
        setCategorySelected(item);
    }

    function handleChangeProduct(item: ProductProps) {
        setProductSelected(item);
    }

    return (
        <Container>
            <CategoryTitle>Categorias</CategoryTitle>
            {category.length !== 0 && (
                <InputCatogary onPress={() => setModalCategoryVisible(true)}>
                    <Text>{categorySelected?.name}</Text>
                </InputCatogary>
            )}

            <Modal transparent={true} visible={modalCategoryVisible} animationType="fade">
                <ModalPicker
                    handleCloseModal={() => setModalCategoryVisible(false)}
                    options={category}
                    selectedItem={handleChangeCategory}
                />
            </Modal>
        </Container>
    );
}
