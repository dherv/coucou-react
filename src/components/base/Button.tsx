import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Button as StyledButton } from '../../styled/Button';

const Wrapper = styled.div`
  margin-right: 8px;
  height: 1em;
`;

export const Button: FC<{
  icon?: ReactElement;
  variant: "primary" | "secondary" | "stop";
  size: "small" | "large";
  onClick: () => void;
}> = ({ icon, children, size, variant, onClick }) => {
  return (
    <StyledButton size={size} variant={variant} onClick={onClick}>
      {icon && <Wrapper>{icon}</Wrapper>}
      <span>{children}</span>
    </StyledButton>
  );
};
