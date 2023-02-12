import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`

    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    padding-top: 15px;
`;

export const ProductsContainer = styled.TouchableOpacity`

    width: 100%;
    /* height: 120px; */
    border-bottom-width: 1px;
    border-color: ${({theme}) => theme.colors.bgPages};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 15px;
`;

export const AreaDescription = styled.View`
    justify-content: center;
    max-width: 50%;
`;

export const CategoryTitle = styled.Text`

    font-size: 17px;
    color: ${({theme}) => theme.colors.text};
    line-height: 33px;
    margin-left: 20px;
    font-family: ${({theme}) => theme.fonts.medium};
    text-transform: uppercase;

`;

export const InputCatogary = styled.TouchableOpacity`

    background-color: #F2F2F2;
    border-radius: 4px;
    width: 100%;
    height: 40px;
    margin-bottom: 12px;
    justify-content: center;
    padding-left: 20px;
    padding-right: 20px;
`;

export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    font-size: 20px;
    line-height: 24px;
    color: ${({theme}) => theme.colors.black};
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 14px;
    line-height: 18px;
    color: ${({theme}) => theme.colors.zinc800};
`;

export const Price = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: 14px;
    line-height: 20px;
    color: ${({theme}) => theme.colors.priceText};
`;

export const ProductImage = styled.Image``;

