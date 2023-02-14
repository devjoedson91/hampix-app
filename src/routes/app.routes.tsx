// rotas para usuarios logados

import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // estilo de navegação stack
import { useNavigation } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';
import { Order } from '../pages/Order';
import FinishOrder from '../pages/FinishOrder';
import { Cart } from '../pages/Cart';

import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View, Image, StyleSheet, Text } from 'react-native';

import { AuthContext } from '../contexts/AuthContext';

import { CartContext } from '../contexts/CartContext';

// export type StackParamsList = {
//     Dashboard: undefined;
//     Order: {
//         number: number | string;
//         isDelivery: boolean;
//         order_id: string;
//     };
//     FinishOrder: {
//         number: number | string;
//         isDelivery: boolean;
//         order_id: string;
//     };
// };

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
    const { goBack } = useNavigation();
    const { signOut } = useContext(AuthContext);

    const { cart } = useContext(CartContext);

    const headerDashboardStyle = {
        header: () => (
            <View
                style={{
                    height: 98,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                }}
            >
                <TouchableOpacity style={{ marginRight: 12 }} onPress={signOut}>
                    <Feather name="log-out" size={28} color="#ff3f4b" />
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} />
                <TouchableOpacity>
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>{cart?.length}</Text>
                    </View>
                    <Feather name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        ),
    };

    const headerRestPagesStyle = {
        header: () => (
            <View
                style={{
                    height: 98,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    backgroundColor: '#fff',
                    borderWidth: 1,
                    borderColor: '#F2F2F2',
                }}
            >
                <TouchableOpacity style={{ marginRight: 12 }} onPress={goBack}>
                    <Feather name="arrow-left" size={28} color="#222222" />
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} />
                <TouchableOpacity>
                    <View style={styles.dot}>
                        <Text style={styles.dotText}>{cart?.length}</Text>
                    </View>
                    <Feather name="shopping-cart" size={30} color="#000" />
                </TouchableOpacity>
            </View>
        ),
    };

    return (
        <Navigator>
            <Screen name="dashboard" component={Dashboard} options={headerDashboardStyle} />
            <Screen name="cart" component={Cart} />
            <Screen name="order" component={Order} options={headerRestPagesStyle} />
            <Screen
                name="finishorder"
                component={FinishOrder}
                options={{
                    title: 'Finalizando',
                    headerTintColor: '#fff',
                }}
            />
        </Navigator>
    );
}

export default AppRoutes;

const styles = StyleSheet.create({
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff3f4b',
        width: 20,
        height: 20,
        borderRadius: 12,
        position: 'absolute',
        zIndex: 99,
        bottom: -2,
        left: -4,
    },
    dotText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: 'bold',
    },
});
