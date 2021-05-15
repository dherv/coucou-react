import styled from 'styled-components';
import { element } from './lib/styled.themes';

const variant = (variant = "primary") => `
  color: ${element[variant].color};
  background: ${element[variant].background};
`;

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

export const Button = styled.button<{
  variant: "primary" | "secondary" | "stop";  size: "small" | "large"
}>`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  ${(props) => size(props.size)};
  ${(props) => variant(props.variant)}
`;

