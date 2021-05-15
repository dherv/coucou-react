import styled from 'styled-components';

export const Muted = styled.div<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 0.5rem 0.65rem;
  background-color: rgba(69, 90, 100, 0.6);
  font-size: 1.25rem;
  color: #fff;
  border-radius: 12px;
`;

export const Name = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 0.65rem 1.5rem;
  background-color: rgba(69, 90, 100, 0.6);
  font-size: 14px;
  color: #fff;
  border-radius: 12px;
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;

export const Figure = styled.figure<{ active: boolean }>`
  position: relative;
  width: 300px;
  height: 200px;
  padding: 2px;
  border-radius: 12px;
  background-color: ${({ active }) => (active ? "#bdbdbd" : "transparent")};
`;
