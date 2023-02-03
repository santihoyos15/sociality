import { useState } from 'react';
import {
  CancelButton,
  Container,
  DeleteButton,
  Description,
  Footer,
  Heading,
  Layout,
  Overlay,
} from './styles';
import { Props } from './types';

export const DeleteModal: React.FC<Props> = ({ open }: Props) => {
  return (
    <Layout open={open}>
      <Overlay></Overlay>
      <Container>
        <Heading>Delete comment</Heading>
        <Description>
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </Description>
        <Footer>
          <CancelButton>NO, CANCEL</CancelButton>
          <DeleteButton>YES, DELETE</DeleteButton>
        </Footer>
      </Container>
    </Layout>
  );
};
