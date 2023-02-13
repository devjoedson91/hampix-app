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
`;