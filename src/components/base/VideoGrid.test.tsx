import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { SampleUsers } from '../../samples/samples';
import { VideoGrid } from './VideoGrid';

describe("VideoGrid component", () => {
  const props = {users: SampleUsers};

  beforeEach(() => {
    render(<VideoGrid {...props} />);
  });

  test("should show one video per user", async () => {
    expect(screen.getAllByTestId("video")).toHaveLength(4);
  });

  test("should show each user name", async () => {
    expect(screen.getAllByText("Victor Hugo")).toHaveLength(4);
  });

  test("should show each user muted icon", async () => {
    expect(screen.getAllByTitle("muted")).toHaveLength(4);
  });

});
