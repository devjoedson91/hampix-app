import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    signDisplay: 'auto'
});