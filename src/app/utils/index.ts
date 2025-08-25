export const formatDate = (input: Date | string): string => {
  const date = input instanceof Date ? input : new Date(input);
  const now = new Date();

  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const timeString = date.toLocaleTimeString([], options);
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );

  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfToday.getDate() - 1);

  if (date >= startOfToday) {
    return `Today, ${timeString}`;
  } else if (date >= startOfYesterday) {
    return `Yesterday, ${timeString}`;
  } else {
    return date.toISOString().split("T")[0];
  }
};
