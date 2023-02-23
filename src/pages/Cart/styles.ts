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
    border-top-width: 1px;
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
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.zinc800};
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

export const BoxAmountContainer = styled.View`
    width: 93px;
    height: 35px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.bgPages};
    border-radius: 7px;
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: space-evenly;
`;

export const AmountItem = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 17px;
    color: ${({theme}) => theme.colors.priceText};
`;

const BaseText = styled.Text`
    font-family: ${({theme}) => theme.fonts.extrabold};
    color: ${({theme}) => theme.colors.text};
`;

export const TotalText = styled(BaseText)`
    font-size: 20px;
`;

export const TotalValue = styled(BaseText)`
    font-size: 22px;
`;

export const FormContainer = styled.View`
    flex: 1;
    
`;

export const FormHeader = styled.View`

    padding: 15px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.zinc800};
`;

export const FinishButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.colors.bgButton};
    align-items: center;
    align-self: center;
    justify-content: center;
    width: 343px;
    height: 48px;
    border-radius: 7px;
    position: absolute;
    bottom: 5px;
`;

export const TextButton = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.white};
    font-size: 14px;
    text-transform: uppercase;
`;
