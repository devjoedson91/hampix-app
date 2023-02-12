import React, { useState, useContext, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StackParamsList } from '../../routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Text, Modal, FlatList, View } from 'react-native';
import {
    Container,
    CategoryTitle,
    InputCatogary,
    ProductsContainer,
    AreaDescription,
    Name,
    Description,
    Price,
    ProductImage,
} from './styles';
import { ModalPicker } from '../../components/ModalPicker';
import { formatPrice } from '../../util/format';
import { Loading } from '../../components/Loading';

// import { AuthContext } from '../../contexts/AuthContext';

import { api } from '../../services/api';

export type CategoryProps = {
    id: string;
    name: string;
};

type ProductProps = {
    id: string;
    name: string;
    banner: string;
    description: string;
    price: string;
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

    const [loading, setLoading] = useState(false);

    async function loadCategories() {
        const response = await api.get('/category');

        setCategory(response.data);
        setCategorySelected(response.data[0]);
    }

    async function loadProducts() {
        setLoading(true);
        const response = await api.get('/category/product', {
            params: { category_id: categorySelected?.id },
        });

        setProducts(response.data);
        setProductSelected(response.data[0]);
        setLoading(false);
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

            {products.length === 0 ? (
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>Sem produtos para a categoria selecionada</Text>
                </View>
            ) : loading ? (
                <Loading />
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ProductsContainer>
                            <AreaDescription>
                                <Name>{item.name}</Name>
                                <Description>{item.description}</Description>
                                <Price>{formatPrice(parseFloat(item.price))}</Price>
                            </AreaDescription>
                            <ProductImage
                                style={{ width: 127, height: 129, borderRadius: 4 }}
                                source={{ uri: `${item.banner}` }}
                            />
                        </ProductsContainer>
                    )}
                />
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
