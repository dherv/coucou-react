import styled from 'styled-components';
import { Button } from './Button';

export const Container = styled.div`
  /* max-width = 2 videos + 0.5rem * 4 margin of li + 1rem padding ul */
  max-width: calc(400px * 2 + 0.5rem * 4 + 2 * 0.5rem);
  padding: 1rem;
  background-color: #212121;
  border-radius: 1rem;
`;

export const Grid = styled.ul`
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: -0.5rem;
  li {
    margin: 0.5rem;
  }
`;

export const GridHeader = styled.div`
  display: flex;
  padding: 1rem 0.5rem;
`;
export const InviteButton = styled(Button)`
  margin-left: auto;
`;
