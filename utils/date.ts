
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



export function getPreviousMonthDate() {

  const date = new Date();
  date.setDate(1); // evită bug-uri
  date.setMonth(date.getMonth() - 1);
  return date.toISOString().split('T')[0]; 
}




export function getPreviousYearDate() {
  const date = new Date();

  date.setDate(1);        // stabilitate
  date.setMonth(0);       // ianuarie (opțional, dar safe)
  date.setFullYear(date.getFullYear() + 1);

  return date.toISOString().split('T')[0];
}


export function getPreviousDayDate() {
  const date = new Date();      
  date.setDate(date.getDate() - 1);

  return date.toISOString().split('T')[0];
}