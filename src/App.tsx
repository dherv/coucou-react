import 'destyle.css';
import { ThemeProvider } from 'styled-components';
import { PageMain } from './components/pages/PageMain';
import { GlobalStyle } from './styled/lib/styled.globals';
import { theme } from './styled/lib/styled.themes';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <PageMain />
      </ThemeProvider>
    </>
  );
}

export default App;
