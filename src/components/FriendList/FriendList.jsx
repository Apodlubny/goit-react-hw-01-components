import PropTypes from 'prop-types';
import FriendListItem from 'components/FriendListItem/FriendListItem';
import { ContainerFriend, FriendItem } from './FriendList.styled';
const FriendList = ({ friends }) => {
  return (
    <ContainerFriend>
      {friends.map(friend => {
        return (
          <FriendItem key={friend.id}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </FriendItem>
        );
      })}
    </ContainerFriend>
  );
};

export default FriendList;
FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
