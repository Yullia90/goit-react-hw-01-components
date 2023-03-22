import { Item, Status, Photo, Name } from './FriendListItem.styled';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline, id } = friend;

  return (
    <Item key={id}>
      <Status style={{ backgroundColor: isOnline ? 'green' : 'red' }} />
      <Photo src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </Item>
  );
};
