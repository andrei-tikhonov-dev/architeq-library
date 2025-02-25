// Color constants
export const COLORS = {
  // Brand colors
  primary: {
    default: "#EE522E",
    hover: "#CC3421",
    focus: "#EE522E",
    active: "#AB1C17",
    text: "#8A0E13",
  },
  secondary: {
    default: "#6634FA",
    hover: "#4E26D7",
    focus: "#6634FA",
    active: "#391AB3",
    text: "#261090",
  },
  destructive: {
    default: "#F74C60",
    hover: "#D43758",
    focus: "#F74C60",
    active: "#B12650",
    text: "#8F1847",
  },

  // UI colors
  text: {
    default: "#212226",
    light: "#7A7A7D",
    disabled: "#898A8D",
  },
  background: {
    primary: "#FFFFFF",
    secondary: "#F4F5F7",
    overlay: "rgba(0, 0, 0, 0.1)",
  },
  disabled: "#CFCED3",
  white: "#FFFFFF",

  // Status colors
  statuses: {
    success: "#2DA222",
    info: "#02599B",
    warning: "#B57215",
    danger: "#B12650",
    blocker: "#760E41",
    attention: "#391AB3",
  },

  // Button backgrounds
  buttonBg: {
    primary: {
      hover: "#FEE9D5",
      active: "#FDCDAB",
    },
    secondary: {
      hover: "#E4D6FE",
      active: "#C8ADFE",
    },
    destructive: {
      hover: "#FEEBEE",
      active: "#FDCED4",
    },
  },
};

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
      default: COLORS.text.default,
      light: COLORS.text.light,
      primary: COLORS.text.default,
      tinted: COLORS.primary.text,
      destructive: COLORS.destructive.text,
    },
    iconButton: {
      primary: "#EDEDEE",
      tinted: "#FDEAE6",
      destructive: "#FEEAEC",
    },
    statuses: COLORS.statuses,
    background: COLORS.background,
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
          default: COLORS.primary.default,
          hover: COLORS.primary.hover,
          focus: COLORS.primary.focus,
          active: COLORS.primary.active,
          disabled: COLORS.disabled,
        },
        text: {
          default: COLORS.white,
          disabled: COLORS.text.disabled,
        },
      },
      secondary: {
        background: {
          default: COLORS.secondary.default,
          hover: COLORS.secondary.hover,
          focus: COLORS.secondary.focus,
          active: COLORS.secondary.active,
          disabled: COLORS.disabled,
        },
        text: {
          default: COLORS.white,
          disabled: COLORS.text.disabled,
        },
      },
      destructive: {
        background: {
          default: COLORS.destructive.default,
          hover: COLORS.destructive.hover,
          focus: COLORS.destructive.focus,
          active: COLORS.destructive.active,
          disabled: COLORS.disabled,
        },
        text: {
          default: COLORS.white,
          disabled: COLORS.text.disabled,
        },
      },
    },
    outline: {
      primary: {
        background: {
          default: "transparent",
          hover: COLORS.buttonBg.primary.hover,
          focus: "transparent",
          active: COLORS.buttonBg.primary.active,
          disabled: "transparent",
        },
        border: {
          default: COLORS.primary.default,
          hover: COLORS.primary.hover,
          focus: COLORS.primary.focus,
          active: COLORS.primary.active,
          disabled: COLORS.disabled,
        },
        text: {
          default: COLORS.primary.text,
          disabled: COLORS.text.disabled,
        },
      },
      secondary: {
        background: {
          default: "transparent",
          hover: COLORS.buttonBg.secondary.hover,
          focus: "transparent",
          active: COLORS.buttonBg.secondary.active,
          disabled: "transparent",
        },
        border: {
          default: COLORS.secondary.default,
          hover: COLORS.secondary.hover,
          focus: COLORS.secondary.focus,
          active: COLORS.secondary.active,
          disabled: COLORS.disabled,
        },
        text: {
          default: COLORS.secondary.text,
          disabled: COLORS.text.disabled,
        },
      },
      destructive: {
        background: {
          default: "transparent",
          hover: COLORS.buttonBg.destructive.hover,
          focus: "transparent",
          active: COLORS.buttonBg.destructive.active,
          disabled: "transparent",
        },
        border: {
          default: COLORS.destructive.default,
          hover: COLORS.destructive.hover,
          focus: COLORS.destructive.focus,
          active: COLORS.destructive.active,
          disabled: COLORS.disabled,
        },
        text: {
          default: COLORS.destructive.text,
          disabled: COLORS.text.disabled,
        },
      },
    },
    ghost: {
      primary: {
        background: {
          default: "transparent",
          hover: COLORS.buttonBg.primary.hover,
          focus: "transparent",
          active: COLORS.buttonBg.primary.active,
          disabled: "transparent",
        },
        text: {
          default: COLORS.primary.text,
          disabled: COLORS.text.disabled,
        },
      },
      secondary: {
        background: {
          default: "transparent",
          hover: COLORS.buttonBg.secondary.hover,
          focus: "transparent",
          active: COLORS.buttonBg.secondary.active,
          disabled: "transparent",
        },
        text: {
          default: COLORS.secondary.text,
          disabled: COLORS.text.disabled,
        },
      },
      destructive: {
        background: {
          default: "transparent",
          hover: COLORS.buttonBg.destructive.hover,
          focus: "transparent",
          active: COLORS.buttonBg.destructive.active,
          disabled: "transparent",
        },
        text: {
          default: COLORS.destructive.text,
          disabled: COLORS.text.disabled,
        },
      },
    },
  },
};

export default theme;
