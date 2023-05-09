const formatDate = (date: string, withTime?: boolean): string => {
  const newDate = new Date(date);
  const yyyy = newDate.getFullYear();
  let mm: any = newDate.getMonth() + 1;
  let dd: any = newDate.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

  let formattedDate = dd + '/' + mm + '/' + yyyy;

  if (withTime) {
    const time = newDate.toLocaleString().slice(newDate.toLocaleString().indexOf(','));
    return formattedDate + time
  } else return formattedDate;
};

const formatNumber = (num: number): string => {
  if (num >= 1000) {
    const units = ["", "k", "M", "B", "T"];
    const decimalPlaces = 1;
    let unitIndex = 0;

    while (num >= 1000 && unitIndex < units.length - 1) {
      num /= 1000;
      unitIndex++;
    }

    return Number(num.toFixed(decimalPlaces)) + units[unitIndex];
  } return num.toString()
}

export { formatDate, formatNumber };
