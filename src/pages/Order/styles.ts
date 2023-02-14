import styled from 'styled-components/native';

export const Container = styled.View`

    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    justify-content: space-between;

`;

export const ProductImage = styled.Image``;

export const AreaDescription = styled.View``;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 22px;
    line-height: 32.67px;
    margin-left: 18px;
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.zinc800};
    margin-left: 18px;
    line-height: 26.73px;
    font-size: 18px;
`;

export const ContainerAddProduct = styled.View`
    width: 100%;
    height: 98px;
    border-top-width: 1px;
    border-color: ${({theme}) => theme.colors.bgPages};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

export const BoxTotalItem = styled.View`
    border-radius: 7px;
    background-color: ${({theme}) => theme.colors.bgButton};
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 175px;
    height: 48px;
`;

export const BoxAmountContainer = styled.View`
    width: 175px;
    height: 48px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.bgPages};
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`;

export const TotalText = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.bold};
    line-height: 20px;
    font-size: 16px;
`;

export const AmountItem = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 17px;
    color: ${({theme}) => theme.colors.priceText};
`;