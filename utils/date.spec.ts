
export function getNextMonthYear() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);

  return date.toLocaleString('ro-RO', {
    month: 'long',
    year: 'numeric'
  });
}

export function getPreviousMonthYear() {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);

  return date.toLocaleString('ro-RO', {
    month: 'long',
    year: 'numeric'
  });
}