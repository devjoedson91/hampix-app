import styled from 'styled-components/native';

export const CartContainer = styled.View`

    flex: 1;
    background-color: ${({theme}) => theme.colors.white};

`;

export const NoCartContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    align-items: center;
    justify-content: center;
`;

export const Header = styled.View`

    flex-direction: row;
    padding: 20px;
    
`;

export const Title = styled.Text`

    color: ${({theme}) => theme.colors.green900};
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 25px;
    margin-right: 20px;

`;

export const ImageItem = styled.Image`
    width: 127px;
    height: 127px;
    border-radius: 4px;
`;

export const ItemsContainer = styled.View`
    width: 100%;
    /* height: 120px; */
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.zinc800};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 20px;
`;

export const AreaDescription = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
`;

export const Section = styled.View`

    height: 296px;

`;

export const DescriptionBlock = styled.View`

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 127px;
    padding: 15px;
`;

export const ActionsContainer = styled.View`

    flex-direction: row;
    width: 100%;
    justify-content: space-between;

`;

export const NameProduct = styled.Text`

    color: ${({theme}) => theme.colors.text};
    font-size: 18px;
    font-family: ${({theme}) => theme.fonts.medium};

`;

export const Price = styled.Text`
    color: ${({theme}) => theme.colors.priceText};
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.medium};
`;

export const NoCartText = styled.Text`
    color: ${({theme}) => theme.colors.text};
    font-size: 16px;
    font-family: ${({theme}) => theme.fonts.medium};
`;