import PropTypes from 'prop-types';
import { Section, Card, Item, Status, Photo, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <Section>
      <Card>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <Item key={id}>
              <Status
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}
              ></Status>
              <Photo src={avatar} alt="User avatar" width="48" />
              <Name>{name}</Name>
            </Item>
          );
        })}
      </Card>
    </Section>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf(['true', 'false']).isRequired,
  id: PropTypes.string.isRequired,
};
