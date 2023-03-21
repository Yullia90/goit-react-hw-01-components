import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <section className={css.main}>
      <ul className={css.list}>
        {friends.map(({ avatar, name, isOnline, id }) => {
          return (
            <li className={css.item} key={id}>
              <span
                className={css.status}
                style={{ backgroundColor: isOnline ? 'green' : 'red' }}
              ></span>
              <img
                className={css.avatar}
                src={avatar}
                alt="User avatar"
                width="48"
              />
              <p className={css.name}>{name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.oneOf(['true', 'false']).isRequired,
  id: PropTypes.string.isRequired,
};
