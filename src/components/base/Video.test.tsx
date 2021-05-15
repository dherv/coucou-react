import 'jest-styled-components';
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Video } from './Video';

describe("Video component", () => {
  const props = {
    name: "Victor Hugo",
    active: true,
    muted: true,
    image: './dev/video_poster_person_1.jpeg'
  };

  beforeEach(() => {
    render(<Video {...props} />);
  });

  test("should show the video", async () => {
    expect(screen.getByTestId("video")).toBeDefined();
  });

  test("should show the name", async () => {
    expect(screen.getByText("Victor Hugo")).toBeDefined();
  });

  test("should show the active mode", async () => {
    expect(screen.getByRole("figure")).toHaveStyleRule('background-color', '#bdbdbd');
  });

  test("should show the muted icon", async () => {
    expect(screen.getByTitle("muted")).toBeDefined();
  });
});
