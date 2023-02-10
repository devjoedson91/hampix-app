import styled from 'styled-components/native';

export const Container = styled.ImageBackground`

    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.bgHome};

`;

export const Logo = styled.Image`

    margin-bottom: 18px;

`;

export const Input = styled.TextInput`

    width: 95%;
    height: 48px;
    background-color: rgba(24, 24, 27, 0.7);
    margin-bottom: 16px;
    border-radius: 4px;
    padding-left: 8px;
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.regular};
    border-width: 2px;
    border-color: ${({theme}) => theme.colors.text};

`;

export const Button = styled.TouchableOpacity`

    width: 95%;
    height: 48px;
    background-color: ${({theme}) => theme.colors.bgButton};
    border-radius: 4px;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`

    font-size: 18px;
    font-weight: bold;
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const InputContainer = styled.View`

    width: 95%;
    align-items: center;
    justify-content: center;
    padding: 32px 14px 32px 14px;

`;