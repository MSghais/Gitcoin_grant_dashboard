export const formatDateEntireOutput = (date: Date) => {
  const formatDateEntire = date.toISOString().split("T")[0];
  console.log(formatDateEntire); // Outputs: "2023-10-17"
  return formatDateEntire;
};

// Calculate the difference between two dates
export function formatRelativeTime(targetDate: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor(
    (targetDate.getTime() - now.getTime()) / 1000
  );

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) {
    return rtf.format(-diffInSeconds, "second");
  } else if (diffInSeconds < 3600) {
    return rtf.format(-Math.floor(diffInSeconds / 60), "minute");
  } else if (diffInSeconds < 86400) {
    return rtf.format(-Math.floor(diffInSeconds / 3600), "hour");
  } else if (diffInSeconds < 2592000) {
    return rtf.format(-Math.floor(diffInSeconds / 86400), "day");
  } else if (diffInSeconds < 31536000) {
    return rtf.format(-Math.floor(diffInSeconds / 2592000), "month");
  } else {
    return rtf.format(-Math.floor(diffInSeconds / 31536000), "year");
  }
}

export function formatTimeAgo(timestamp: Date): string {
  const now = new Date();
  const elapsedMilliseconds = now.getTime() - timestamp.getTime();
  let elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

  if (elapsedMilliseconds < 0) {
    elapsedSeconds = Math.abs(elapsedSeconds)
    if (elapsedSeconds < 60) {
      return `End in ${elapsedSeconds} second${elapsedSeconds === 1 ? "" : "s"} `;
    }

    let elapsedMinutes = Math.floor(elapsedSeconds / 60);
    elapsedMinutes = Math.abs(elapsedMinutes)
    if (elapsedMinutes < 60) {
      return `End in ${elapsedMinutes} minute${elapsedMinutes === 1 ? "" : "s"} `;
    }

    let elapsedHours = Math.floor(elapsedMinutes / 60);
    elapsedHours = Math.abs(elapsedHours)
    if (elapsedHours < 24) {
      return `End in ${elapsedHours} hour${elapsedHours === 1 ? "" : "s"} `;
    }

    let elapsedDays = Math.floor(elapsedHours / 24);
    elapsedDays = Math.abs(elapsedDays)

    if (elapsedDays < 7) {
      return `End in ${elapsedDays} day${elapsedDays === 1 ? "" : "s"} `;
    }
    let elapsedWeeks = Math.floor(elapsedDays / 24);
    elapsedWeeks = Math.abs(elapsedWeeks)
    return `End in ${elapsedWeeks} week${elapsedWeeks === 1 ? "" : "s"} `;
  } else {
    if (elapsedSeconds < 60) {
      return `${elapsedSeconds} second${elapsedSeconds === 1 ? "" : "s"} ago`;
    }

    const elapsedMinutes = Math.floor(elapsedSeconds / 60);

    if (elapsedMinutes < 60) {
      return `${elapsedMinutes} minute${elapsedMinutes === 1 ? "" : "s"} ago`;
    }

    const elapsedHours = Math.floor(elapsedMinutes / 60);

    if (elapsedHours < 24) {
      return `${elapsedHours} hour${elapsedHours === 1 ? "" : "s"} ago`;
    }

    const elapsedDays = Math.floor(elapsedHours / 24);

    if (elapsedDays < 7) {
      return `${elapsedDays} day${elapsedDays === 1 ? "" : "s"} ago`;
    }

    const elapsedWeeks = Math.floor(elapsedDays / 7);

    return `${elapsedWeeks} week${elapsedWeeks === 1 ? "" : "s"} ago`;
  }


}

