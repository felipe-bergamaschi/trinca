import Decimal from "decimal.js";

export function formatCurrencyToReal(
  value: number | string,
): string {
  const decimalValue = new Decimal(value);
  const formattedValue = decimalValue.toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber();

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(formattedValue);
}

export function formatCurrencyOnInput(value: string) {
  const sanitizeValue: string = value
    .split('')
    .filter((s: any) => /\d/.test(s))
    .join('')
    .padStart(3, '0');

  const formattedValue = `${sanitizeValue.slice(0, -2)}.${sanitizeValue.slice(-2)}`;

  return formatCurrencyToReal(formattedValue)
}

export function formatCurrencyToSubmit(value: string) {
  const sanitizeValue = value
    .replace(/[R$\s.]/g, '')
    .replace(',', '.');

  const decimalValue = new Decimal(sanitizeValue);

  return decimalValue.toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber();
}