import { IUser } from '../types/interfaces.types';

export const SampleUser: IUser = {
  id: 1,
  name: "Victor Hugo",
  active: true,
  muted: true,
  image: "./dev/video_poster_person_3.jpeg",
};

export const SampleUsers: IUser[] = Array(4)
  .fill(SampleUser as any, 0)
  .map((user, index) => ({
    ...user,
    id: index + 1,
    active: index === 0,
    muted: index === 2,
    image: `/dev/video_poster_person_${index + 1}.jpeg`,
  }));
