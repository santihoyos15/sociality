import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--primary-light-color);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 36px;
  width: 100px;
  border-radius: 6px;
  color: var(--primary-color);
`;

export const Action = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const Icon = styled.span`
  opacity: 0.5;
`;

export const Count = styled.p``;
