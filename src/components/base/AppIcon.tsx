import { FC } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import styled from 'styled-components';

interface AppIconProps {}
export const AppIcon: FC<AppIconProps> = () => {
  return (
    <StyledIcon>
      <IoIosArrowBack></IoIosArrowBack>
    </StyledIcon>
  );
};

const StyledIcon = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 70px;
  font-size: 1.5rem;

  border: 1px solid rgba(69, 90, 100, 0.6);
  border-radius: 10px;
`;
