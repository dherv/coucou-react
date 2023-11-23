import React, { FC } from 'react';
import { TiGroupOutline } from 'react-icons/ti';
import { IUser } from '../../types/interfaces.types';
import { AppIcon } from './AppIcon';
import { Button } from './Button';
import { Header, Section, Title } from './Room.styled';
import { VideoGrid } from './VideoGrid';

export interface RoomProps {
  name: string;
  users: IUser[];
}
export const Room: FC<RoomProps> = ({ name, users }) => {
  return (
    <Section>
      <Header>
        <AppIcon />
        <Title>{name}</Title>

        <Button
          variant="secondary"
          size="small"
          icon={<TiGroupOutline />}
          onClick={() => {}}
        >
          group
        </Button>
      </Header>

      <VideoGrid users={users}></VideoGrid>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          maxWidth: "calc(400px * 2 + 0.5rem * 4 + 2 * 0.5rem)",
          padding: "1rem 0",
        }}
      >
        <AppIcon />
        <AppIcon />
        <Button size="large" variant="stop" onClick={() => {}}>
          End Call
        </Button>
        <AppIcon />
        <AppIcon />
      </div>
    </Section>
  );
};
