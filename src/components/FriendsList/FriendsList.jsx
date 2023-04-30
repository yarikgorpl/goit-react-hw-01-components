import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import css from './FriendsList.module.css';
import PropTypes from 'prop-types';
export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(item => {
        return <FriendsListItem key={item.id} {...item} />;
      })}
    </ul>
  );
};
FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
