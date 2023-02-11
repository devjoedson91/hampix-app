import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`

    flex: 1;
    background-color: ${({theme}) => theme.colors.white};
    padding-top: 15px;
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

