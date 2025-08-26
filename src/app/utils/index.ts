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

export function formatDateTime(isoString: string) {
  const date = new Date(isoString);

  // Format date (M/D/YYYY)
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;

  // Format time (hh:mm:ss AM/PM)
  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert 0 -> 12 for 12 AM

  const formattedTime = `${hours}:${minutes}:${seconds} ${ampm}`;

  return { formattedDate, formattedTime };
}
