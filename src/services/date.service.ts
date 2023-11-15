function formatDate(timestamp: Date, includeYear = true) {
  return new Date(timestamp).toLocaleDateString("en-US", {
    month: "numeric",
    day: "numeric",
    year: includeYear ? "numeric" : undefined,
  });
}

function formatTime(timestamp: Date) {
  return new Date(timestamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  });
}

export default {
  formatDate,
  formatTime,
};
