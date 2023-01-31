import styled from 'styled-components';
import avatar from '../../assets/images/avatars/image-amyrobson.png';

const cardPadding = '14px';

export const Card = styled.div`
  background-color: white;
  border-radius: 6px;
`;

export const Header = styled.div`
  padding: ${cardPadding};
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const ProfilePic = styled.img`
  background-color: transparent;
  background-image: url(${avatar});
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
`;

export const Username = styled.p``;

export const CreatedAt = styled.p`
  color: #6f6e6e;
`;

export const Content = styled.p`
  color: #6f6e6e;
  padding: ${cardPadding};
`;

export const Footer = styled.div`
  padding: ${cardPadding};
  display: flex;
  justify-content: space-between;
  height: 60px;
  gap: 10px;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReplyButton = styled.button`
  width: 90px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: var(--primary-color);
`;

export const ReplyText = styled.p`
  font-weight: 700;
`;

export const DeleteButton = styled.button`
  cursor: pointer;
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--danger-color);
`;

export const DeleteText = styled.p`
  font-weight: 700;
`;

export const EditButton = styled.button`
  cursor: pointer;
  width: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  color: var(--primary-color);
`;

export const EditText = styled.p`
  font-weight: 700;
`;

export const RepliesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding-left: 16px;
  border-left: 1px solid #e8e2e2;
`;
