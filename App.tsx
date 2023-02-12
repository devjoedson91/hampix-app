import React from 'react';
import { LogBox, StatusBar } from 'react-native';
LogBox.ignoreAllLogs;
import { ThemeProvider } from 'styled-components';
import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import { AuthProvider } from './src/contexts/AuthContext';
import {
    useFonts,
    MPLUSRounded1c_400Regular,
    MPLUSRounded1c_500Medium,
    MPLUSRounded1c_700Bold,
    MPLUSRounded1c_800ExtraBold,
} from '@expo-google-fonts/m-plus-rounded-1c';
import { Loading } from './src/components/Loading';

export default function App() {
    const [fontsLoader] = useFonts({
        MPLUSRounded1c_400Regular,
        MPLUSRounded1c_500Medium,
        MPLUSRounded1c_700Bold,
        MPLUSRounded1c_800ExtraBold,
    });
    return (
        <NavigationContainer>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <StatusBar translucent={false} />
                    {fontsLoader ? <Routes /> : <Loading />}
                </ThemeProvider>
            </AuthProvider>
        </NavigationContainer>
    );
}
