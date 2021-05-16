import styled from 'styled-components';
import { element } from '../../styled/lib/styled.themes';

const variant = (inverted: boolean | undefined) => (variant = "primary") => {
  const invertedVariant = `
  color: ${element[variant].background};
  background: transparent;
  border: 1px solid rgba(69, 90, 100, 0.6);
  `;
  
  const regularVariant = `
  color: ${element[variant].color};
  background: ${element[variant].background};
`;

  return inverted ? invertedVariant : regularVariant;
};

const size = (size = "default") => {
  const sizes: { [key: string]: any } = {
    small: { font: "1rem", padding: ".5rem 1.5rem", radius: ".5rem" },
    large: { font: "1.25rem", padding: "1.5rem 2.5rem", radius: "1rem" },
    default: { font: "1rem", padding: "1rem 1.5rem", radius: "1rem" },
  };
  return `
  font-size: ${sizes[size].font};
  padding: ${sizes[size].padding};
  border-radius: ${sizes[size].radius}
  `;
};

export const StyledButton = styled.button<{
  variant: "primary" | "secondary" | "stop";
  size?: "small" | "large";
  inverted?: boolean;
}>`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  ${(props) => size(props.size)};
  ${(props) => variant(props.inverted)(props.variant)}
`;

export const Wrapper = styled.div`
  margin-right: 8px;
  height: 1em;
`;
