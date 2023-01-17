import { ThemeProvider } from "theme-ui";
import theme from "../lib/foundation/theme";
import "../lib/foundation/global.scss";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider {...{ theme }}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
