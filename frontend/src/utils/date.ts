export function getDate(date: string) {
  const dateUTC = new Date(date);

  dateUTC.setTime(dateUTC.getTime() + dateUTC.getTimezoneOffset() * 60000)

  return dateUTC;
}
