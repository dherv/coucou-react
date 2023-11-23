import styled from 'styled-components';

export const Section = styled.section`
  height: 100vh;
  color: ${(props) => props.theme.page.dark.color};
  background-color: ${(props) => props.theme.page.dark.background};
`;
export const Title = styled.h1`
  text-transform: capitalize;
  font-size: 1.75rem;
  font-weight: 500;
  font-family: Poppins, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  > * {
    margin: 0 1rem;
  }
`
