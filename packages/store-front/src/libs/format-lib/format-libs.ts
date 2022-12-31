const locale = 'de-DE';
const currencyFormat = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'EUR',
});

export const formatCurrency = (value: number): string => (Number.isNaN(value) ? '' : currencyFormat?.format(value));
export const formatNumber = (value: number): string => value?.toLocaleString();
