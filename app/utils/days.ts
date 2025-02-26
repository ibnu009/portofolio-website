import dayjs from "dayjs";

export function formatToMonthAndYear({ date }: { date: Date }) {
  return dayjs(date).format("MMMM YYYY");
}
