import styled from 'styled-components';
import { Props } from './types';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  filter: opacity(0.6);
`;

const containerPadding = '22px';

export const Layout = styled.div<Props>`
  display: ${({ open }) => (open ? 'fixed' : 'none')};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${containerPadding};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto 16px;
  height: fit-content;
  padding: ${containerPadding};
  background-color: white;
  border-radius: var(--global-border-radius);
`;

export const Heading = styled.h2`
  font-size: 1.3rem;
`;

export const Description = styled.p`
  color: var(--regular-text-color);
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  height: 50px;
`;

export const CancelButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--global-border-radius);
  color: white;
  background-color: var(--regular-text-color);
  text-transform: uppercase;
  font-size: 1rem;
`;

export const DeleteButton = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: var(--global-border-radius);
  color: white;
  background-color: var(--danger-color);
  text-transform: uppercase;
  font-size: 1rem;
`;
