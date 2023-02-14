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
    BoxTotalItem,
    TotalText,
    BoxAmountContainer,
    AmountItem,
} from './styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { ProductProps } from '../Dashboard';
import { formatPrice } from '../../util/format';
import { Feather } from '@expo/vector-icons';
import { Loading } from '../../components/Loading';
import { CartContext } from '../../contexts/CartContext';

type RouteDetailParams = {
    Order: {
        product_id: string;
    };
};

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export function Order() {
    const { cart, addItemCart } = useContext(CartContext);

    const { params } = useRoute<OrderRouteProps>();

    const productExists = cart.find((product) => product.id === params.product_id);

    const [loading, setLoading] = useState(false);

    const [product, setProduct] = useState<ProductProps>();

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
    }, []);

    function handleAddCart(product_id: string) {
        addItemCart(product_id);
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
                />
                <Name>{product?.name}</Name>
                <Description>{product?.description}</Description>
            </AreaDescription>
            <ContainerAddProduct>
                <BoxAmountContainer>
                    <TouchableOpacity>
                        <Feather name="minus" size={22} color="#979797" />
                    </TouchableOpacity>
                    <AmountItem>{productExists ? productExists.amount : 0}</AmountItem>
                    <TouchableOpacity onPress={() => handleAddCart(product?.id as string)}>
                        <Feather name="plus" size={22} color="#F88B0C" />
                    </TouchableOpacity>
                </BoxAmountContainer>
                <BoxTotalItem>
                    <TotalText>Total:</TotalText>
                    <TotalText>
                        {productExists ? formatPrice(productExists.total) : formatPrice(0)}
                    </TotalText>
                </BoxTotalItem>
            </ContainerAddProduct>
        </Container>
    );
}
