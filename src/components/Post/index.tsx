import ReactTimeAgo from 'react-time-ago';
import { Counter } from '../Counter';
import { Icon } from '../Icon';
import {
  Card,
  Footer,
  Header,
  Content,
  Username,
  EditText,
  CreatedAt,
  ReplyText,
  DeleteText,
  EditButton,
  ProfilePic,
  ReplyButton,
  DeleteButton,
  ButtonContainer,
  RepliesContainer,
} from './styles';

import { Props } from './types';

export const Post: React.FC<Props> = ({
  id,
  username,
  createdAt,
  likes,
  content,
  own = false,
  replies,
}: Props) => {
  return (
    <>
      <Card>
        <Header>
          <ProfilePic />
          <Username>{username}</Username>
          <CreatedAt>
            <ReactTimeAgo date={createdAt} />
          </CreatedAt>
        </Header>
        <Content>{content}</Content>
        <Footer>
          <Counter count={likes} />
          <ButtonContainer>
            {own ? (
              <>
                <DeleteButton>
                  <Icon name="delete" style={{ opacity: 1 }} />
                  <DeleteText>Delete</DeleteText>
                </DeleteButton>
                <EditButton>
                  <Icon name="edit" style={{ opacity: 1 }} />
                  <EditText>Reply</EditText>
                </EditButton>
              </>
            ) : (
              <ReplyButton>
                <Icon name="reply" style={{ opacity: 1 }} />
                <ReplyText>Reply</ReplyText>
              </ReplyButton>
            )}
          </ButtonContainer>
        </Footer>
      </Card>
      {replies?.length && (
        <RepliesContainer>
          {replies.map((reply) => (
            <Post key={reply.id} {...reply} />
          ))}
        </RepliesContainer>
      )}
    </>
  );
};
