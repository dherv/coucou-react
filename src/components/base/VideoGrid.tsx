import React, { FC } from 'react';
import { BsPlusSquareFill } from 'react-icons/bs';
import { IUser } from '../../types/interfaces.types';
import { Video } from './Video';
import { Container, Grid, GridHeader, InviteButton } from './VideoGrid.styled';

export interface VideoGridProps {
  users: IUser[];
}

export const VideoGrid: FC<VideoGridProps> = ({ users }) => {
  return (
    <Container>
      <GridHeader>
        <InviteButton icon={<BsPlusSquareFill/>} inverted variant="primary" onClick={() => console.log("hello")}>Invite</InviteButton>
      </GridHeader>
      <Grid>
        {users.map((user) => (
          <li key={user.id}>
            <Video
              name={user.name}
              active={user.active}
              image={user.image}
              muted={user.muted}
            ></Video>
          </li>
        ))}
      </Grid>
    </Container>
  );
};
