import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { api } from '../../services/api';
import {
    Container,
    ProductImage,
    AreaDescription,
    Name,
    Description,
    ContainerAddProduct,
} from './styles';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { ProductProps } from '../Dashboard';

type RouteDetailParams = {
    Order: {
        product_id: string;
    };
};

type OrderRouteProps = RouteProp<RouteDetailParams, 'Order'>;

export function Order() {
    const { params } = useRoute<OrderRouteProps>();

    const [product, setProduct] = useState<ProductProps>();

    async function loadProduct() {
        const response = await api.get('/product', {
            params: {
                product_id: params.product_id,
            },
        });

        setProduct(response.data);
    }

    useEffect(() => {
        loadProduct();
    }, []);

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
            <ContainerAddProduct></ContainerAddProduct>
        </Container>
    );
}
