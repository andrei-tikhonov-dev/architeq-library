const theme = {
  fontFamily: '"Segoe UI", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;',
  margins: {
    default: "8px",
    small: "4px",
  },
  spacing: {
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
  colors: {
    text: {
      default: "#212226",
      light: "#7A7A7D",
      primary: "#212226",
      tinted: "#8A0E13",
      destructive: "#8F1847",
    },
    iconButton: {
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
    background: {
      primary: "#FFFFFF",
      secondary: "#F4F5F7",
      overlay: "rgba(0, 0, 0, 0.1)",
    },
  },
  radius: {
    button: "2px",
    sm: "4px",
    md: "8px",
  },
  border: {
    radius: {
      sm: "4px",
      md: "8px",
    },
  },
  shadows: {
    sm: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  typography: {
    size: {
      sm: "12px",
      md: "14px",
      lg: "16px",
    },
  },
  buttons: {
    sizes: {
      sm: {
        paddingX: "8px",
        paddingY: "4px",
        iconGap: "4px",
      },
      md: {
        paddingX: "16px",
        paddingY: "8px",
        iconGap: "8px",
      },
      lg: {
        paddingX: "24px",
        paddingY: "12px",
        iconGap: "12px",
      },
    },
    solid: {
      primary: {
        background: {
          default: "#EE522E",
          hover: "#CC3421",
          focus: "#EE522E",
          active: "#AB1C17",
          disabled: "#CFCED3",
        },
        text: {
          default: "#FFFFFF",
          disabled: "#898A8D",
        },
      },
      secondary: {
        background: {
          default: "#6634FA",
          hover: "#4E26D7",
          focus: "#6634FA",
          active: "#391AB3",
          disabled: "#CFCED3",
        },
        text: {
          default: "#FFFFFF",
          disabled: "#898A8D",
        },
      },
      destructive: {
        background: {
          default: "#F74C60",
          hover: "#D43758",
          focus: "#F74C60",
          active: "#B12650",
          disabled: "#CFCED3",
        },
        text: {
          default: "#FFFFFF",
          disabled: "#898A8D",
        },
      },
    },
    outline: {
      primary: {
        background: {
          default: "transparent",
          hover: "#FEE9D5",
          focus: "transparent",
          active: "#FDCDAB",
          disabled: "transparent",
        },
        border: {
          default: "#EE522E",
          hover: "#CC3421",
          focus: "#EE522E",
          active: "#AB1C17",
          disabled: "#CFCED3",
        },
        text: {
          default: "#8A0E13",
          disabled: "#898A8D",
        },
      },
      secondary: {
        background: {
          default: "transparent",
          hover: "#E4D6FE",
          focus: "transparent",
          active: "#C8ADFE",
          disabled: "transparent",
        },
        border: {
          default: "#6634FA",
          hover: "#4E26D7",
          focus: "#6634FA",
          active: "#391AB3",
          disabled: "#CFCED3",
        },
        text: {
          default: "#261090",
          disabled: "#898A8D",
        },
      },
      destructive: {
        background: {
          default: "transparent",
          hover: "#FEEBEE",
          focus: "transparent",
          active: "#FDCED4",
          disabled: "transparent",
        },
        border: {
          default: "#F74C60",
          hover: "#D43758",
          focus: "#F74C60",
          active: "#B12650",
          disabled: "#CFCED3",
        },
        text: {
          default: "#8F1847",
          disabled: "#898A8D",
        },
      },
    },
    ghost: {
      primary: {
        background: {
          default: "transparent",
          hover: "#FEE9D5",
          focus: "transparent",
          active: "#FDCDAB",
          disabled: "transparent",
        },
        text: {
          default: "#8A0E13",
          disabled: "#898A8D",
        },
      },
      secondary: {
        background: {
          default: "transparent",
          hover: "#E4D6FE",
          focus: "transparent",
          active: "#C8ADFE",
          disabled: "transparent",
        },
        text: {
          default: "#261090",
          disabled: "#898A8D",
        },
      },
      destructive: {
        background: {
          default: "transparent",
          hover: "#FEEBEE",
          focus: "transparent",
          active: "#FDCED4",
          disabled: "transparent",
        },
        text: {
          default: "#8F1847",
          disabled: "#898A8D",
        },
      },
    },
  },
};

export default theme;
