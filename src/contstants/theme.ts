const theme = {
  fontFamily: '"Segoe UI", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;',
  margins: {
    default: "8px",
    small: "4px",
  },
  colors: {
    text: {
      default: "#212226",
      light: "#7A7A7D",
      primary: "#212226",
      tinted: "#8A0E13",
      destructive: "#8F1847",
    },
    button: {
      primary: "#EDEDEE",
      tinted: "#FDEAE6",
      destructive: "#FEEAEC",
    },
    statuses: {
      success: "#2DA222", // Green — indicates successful completion
      info: "#02599B", // Blue — represents normal state or informational status
      warning: "#B57215", // Orange — signals a warning or potential issue
      danger: "#B12650", // Red — highlights a critical situation
      blocker: "#760E41", // Dark red — represents a blocking status
      attention: "#391AB3", // Purple — requires attention or monitoring
    },
  },
  radius: {
    button: "2px",
  },
};
export default theme;
