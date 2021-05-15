import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe("Button component", () => {
  const props = {
    icon: (
      <svg>
        <title>icon</title>
      </svg>
    ),
    size: "small" as "small" | "large",
    variant: "primary" as "primary" | "stop" | "secondary",
    onClick: jest.fn(),
  };
  beforeEach(() => {
    render(<Button {...props}>text</Button>);
  });

  test("should have the right color", async () => {
    expect(screen.getByRole("button")).toHaveStyleRule("background", "#00e676");
  });

  test("should display the icon", async () => {
    expect(screen.getByTitle("icon")).toBeDefined();
  });

  test("should call onClick when button clicked", async () => {
    userEvent.click(screen.getByRole("button"));
    expect(props.onClick).toHaveBeenCalled();
  });
});
