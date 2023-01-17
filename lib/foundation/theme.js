const theme = {
  space: {
    xs: "var(--space-xs)",
    sm: "var(--space-sm)",
    md: "var(--space-md)",
    lg: "var(--space-lg)",
    xl: "var(--space-xl)",
  },
  layout: {
    container: {
      py: "calc(var(--space-xl) * 3)",
      mx: "auto",
      px: "var(--space-lg)",
      maxWidth: "500px",
    },
  },
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Montserrat, sans-serif",
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  forms: {
    input: {
      padding: "md",
    },
  },
  colors: {
    txt_pri: "#111",
    txt_sec: "#666",
  },
  styles: {
    root: {
      fontFamily: "body",
      color: "txt_pri",
    },
    h1: {},
  },
};

export default theme;
