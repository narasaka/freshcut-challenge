export const getDayDiff = (a: Date, b: Date) => {
  const diff = Math.abs(b.getTime() - a.getTime());
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  return diffInDays;
};
