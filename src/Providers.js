import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import { GlobalStyles } from './GlobalStyles';

const Providers = ({ children })  => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {children}
        <GlobalStyles />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { Providers };
