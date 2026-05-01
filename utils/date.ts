
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

export function getTomorrowFormatted() {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  return date.toISOString().split('T')[0];
}