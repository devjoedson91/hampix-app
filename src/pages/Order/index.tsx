import { useEffect, useState, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { api } from '../../services/api';
import {
    Container,
    ProductImage,
    AreaDescription,
    Name,
    Description,
    ContainerAddProduct,
    AddItemButton,
    AddItemText,
    BoxAmountContainer,
    AmountItem,
} from './styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { formatPrice } from '../../util/format';
import { Feather } from '@expo/vector-icons';
import { Loading } from '../../components/Loading';
import { CartContext } from '../../contexts/CartContext';
import { Product } from '../../contexts/CartContext';

type RouteDetailParams = {
    Order: {
        product_id: string;
    };
};

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export function Order() {
    const { cart, addItemCart, updateProductAmount } = useContext(CartContext);

    const { params } = useRoute<OrderRouteProps>();

    const productExists = cart.find((product) => product.id === params.product_id);

    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState<Product>();

    async function loadProduct() {
        setLoading(true);
        const response = await api.get('/product', {
            params: {
                product_id: params.product_id,
            },
        });

        setLoading(false);
        setProduct(response.data);
    }

    useEffect(() => {
        loadProduct();
        console.log(cart);
    }, []);

    function handleAddItemCart(product_id: string) {
        addItemCart(product_id);
    }

    function handleRemoveItemCart(product: Product) {
        updateProductAmount({ productId: product.id, amount: product.amount - 1 });
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <Container>
            <AreaDescription>
                <ProductImage
                    source={{ uri: `${product?.banner}` }}
                    style={{ width: '100%', height: 270, marginBottom: 20 }}
                    resizeMode="cover"
                />
                <Name>{product?.name}</Name>
                <Description>{product?.description}</Description>
            </AreaDescription>
            <ContainerAddProduct>
                <BoxAmountContainer>
                    <TouchableOpacity
                        onPress={() => handleRemoveItemCart(productExists as Product)}
                        disabled={(productExists?.amount as number) <= 1 || !productExists}
                    >
                        <Feather name="minus" size={22} color="#979797" />
                    </TouchableOpacity>
                    <AmountItem>{productExists ? productExists.amount : 0}</AmountItem>
                    <TouchableOpacity onPress={() => handleAddItemCart(product?.id as string)}>
                        <Feather name="plus" size={22} color="#F88B0C" />
                    </TouchableOpacity>
                </BoxAmountContainer>
                <AddItemButton onPress={() => handleAddItemCart(product?.id as string)}>
                    <AddItemText>Adicionar</AddItemText>
                    <AddItemText>
                        {productExists ? formatPrice(productExists.total) : formatPrice(0)}
                    </AddItemText>
                </AddItemButton>
            </ContainerAddProduct>
        </Container>
    );
}
