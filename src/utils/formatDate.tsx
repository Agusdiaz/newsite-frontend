const formatDate = (date: string) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString();
};

export default formatDate;
