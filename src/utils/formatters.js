
export function formatCurrency(value) {
  if (typeof value !== 'number') {
    return 'N/A';
  }

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}