import PropTypes from 'prop-types';
import {
  Section,
  Card,
  Avatar,
  Info,
  Item,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) => {
  return (
    <Section>
      <Card>
        <div>
          <Avatar src={avatar} alt="User avatar" />
          <p>{username}</p>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
        <Info>
          <Item>
            <Label>Followers</Label>
            <Quantity>{followers}</Quantity>
          </Item>
          <Item>
            <Label>Views</Label>
            <Quantity>{views}</Quantity>
          </Item>
          <Item>
            <Label>Likes</Label>
            <Quantity>{likes}</Quantity>
          </Item>
        </Info>
      </Card>
    </Section>
  );
};

Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      username: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
      }),
    })
  ),
};
