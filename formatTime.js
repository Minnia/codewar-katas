const formatTime = (num) => num.toString().padStart(2, "0");
function timeCorrect(timestring) {
  const timeFormat = /^([0-9]\d):([0-9]\d):([0-9]\d)$/;
  const timestringIsValid = timeFormat.test(timestring);
  if (timestring === "") {
    return "";
  }
  if (!timestring || !timestringIsValid) {
    return null;
  }
  console.log("valid", timestringIsValid, timestring);
  if (timestringIsValid) {
    // The time string is not in the correct format, so we need to fix it.

    let [hour, minute, second] = timestring
      .split(":")
      .map((n) => parseInt(n, 10));
    if (second >= 60) {
      // The seconds value is invalid, so we need to adjust it.
      const extraMinutes = Math.floor(second / 60);
      minute += extraMinutes;
      second -= extraMinutes * 60;
    }

    if (minute >= 60) {
      // The minutes value is invalid, so we need to adjust it.
      const extraHours = Math.floor(minute / 60);
      hour += extraHours;
      console.log("after", hour, timestring);
      minute -= extraHours * 60;
    }
    if (hour >= 24) {
      const days = Math.floor(hour / 24);

      // The hour value is invalid, so we need to adjust it.

      hour = hour - days * 24;
    }

    // Rebuild the time string with the corrected values.

    return `${formatTime(hour)}:${formatTime(minute)}:${formatTime(second)}`;
  }

  return timestring;
}
