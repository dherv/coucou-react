import { FC, ReactElement } from 'react';
import { StyledButton, Wrapper } from './Button.styled';

export interface ButtonProps {
  icon?: ReactElement;
  variant: "primary" | "secondary" | "stop";
  size?: "small" | "large";
  inverted?: boolean
  className?: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ icon, children, size, variant, inverted, className, onClick }) => {
  return (
    <StyledButton className={className} inverted={inverted} size={size} variant={variant} onClick={onClick}>
      {icon && <Wrapper>{icon}</Wrapper>}
      <span>{children}</span>
    </StyledButton>
  );
};
