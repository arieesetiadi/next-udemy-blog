import dayjs, { type Dayjs } from 'dayjs';

export function isWithinDays(date: string, dayRange: number): boolean {
  const postDate = dayjs(date);
  const currentDate = dayjs();

  const differenceInDays = currentDate.diff(postDate, 'day');

  return differenceInDays <= dayRange;
}
