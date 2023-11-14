import Decimal from "decimal.js";

export function formatCurrencyToReal(
  value: number,
): string {
  const decimalValue = new Decimal(value);
  const formattedValue = decimalValue.toDecimalPlaces(2, Decimal.ROUND_DOWN).toNumber();

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(formattedValue);
}