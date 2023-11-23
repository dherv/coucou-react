import 'jest-styled-components';
import { render, screen } from '@testing-library/react';
import { SampleUsers } from '../../samples/samples';
import { Room } from './Room';

describe("Room component", () => {
  const props = {
    name: "room",
    users: SampleUsers
  };
  beforeEach(() => {
    render(<Room {...props}></Room>);
  });

  test("should have the right color", async () => {
    expect(screen.getByText("room")).toBeDefined()
  });
});
