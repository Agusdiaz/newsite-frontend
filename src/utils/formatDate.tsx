const formatDate = (date: string, withTime?: boolean) => {
  const newDate = new Date(date);
  if (withTime) return newDate.toLocaleString();
  else return newDate.toLocaleDateString();
};

export default formatDate;
