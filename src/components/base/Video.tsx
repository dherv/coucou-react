import { FC } from 'react';
import { TiVolumeMute } from 'react-icons/ti';
import { Figure, Muted, Name, Video as StyledVideo } from './Video.styled';

export interface VideoProps {
  name: string;
  active: boolean;
  muted: boolean;
  image: string;
}

export const Video: FC<VideoProps> = ({ name, image, active, muted }) => {
  return (
    <Figure active={active}>
      <StyledVideo data-testid="video" poster={image}>
        <source></source>
        <p>Your browser doesn't support HTML5 video tag.</p>
      </StyledVideo>
      <Name>{name}</Name>
      <Muted show={muted}>
        <TiVolumeMute title="muted"></TiVolumeMute>
      </Muted>
    </Figure>
  );
};

