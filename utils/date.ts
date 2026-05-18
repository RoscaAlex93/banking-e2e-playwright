

export function getTomorrowFormatted() {
  const date = new Date();
  date.setDate(date.getDate() + 1);

  return date.toISOString().split('T')[0];
}



export function getPreviousMonthDate() {

  const date = new Date();
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  return date.toISOString().split('T')[0]; 
}




export function getPreviousYearDate() {
  const date = new Date();

  date.setDate(1);
  date.setMonth(0);      
  date.setFullYear(date.getFullYear() + 1);

  return date.toISOString().split('T')[0];
}


export function getPreviousDayDate() {
  const date = new Date();      
  date.setDate(date.getDate() - 1);

  return date.toISOString().split('T')[0];
}



export function getTodayDate(){
  const date = new Date();
  return date.toISOString().split('T')[0];
}

export function getLastWeek(){
  const date = new Date();
  date.setDate(date.getDate() - 7);
  return date.toISOString().split('T')[0];
}

