import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';
export const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.statusOnline : css.status}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
