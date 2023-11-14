export function getDate(date: string) {
  const dateUTC = new Date(date);

  const offsetMin = new Date().getTimezoneOffset();

  const offsetMili = offsetMin * 60 * 1000;

  return new Date(dateUTC.getTime() - offsetMili);
}