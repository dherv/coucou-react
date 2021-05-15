import { FC } from 'react';
import styled from 'styled-components';
import { ITheme } from '../../types/interfaces.types';

export const TemplateMain: FC<{}> = ({ children }) => <Main>{children}</Main>;

const Main = styled.main<{ theme: ITheme }>`
  height: 100vh;
  background: ${(props) => props.theme.page.backgroundDark};
  color: ${(props) => props.theme.page.textDark};
`;
