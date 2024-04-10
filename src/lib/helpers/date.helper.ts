import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function isWithinDays(date: Date, dayRange: number): boolean {
  const postDate = dayjs(date);
  const currentDate = dayjs();
  const differenceInDays = currentDate.diff(postDate, 'day');
  return differenceInDays <= dayRange;
}

export function fromNow(date: Date): string {
  const targetDate = dayjs(date);
  const diff = targetDate.fromNow();
  return diff;
}
