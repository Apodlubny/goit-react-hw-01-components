import styled from '@emotion/styled';

export const ContainerFriend = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
  background-color: white;
  margin-top: 40px;
  padding: 20px 10px;
  gap: 6px;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`;

export const FriendItem = styled.li`
  display: flex;
  width: 250px;
  background-color: rgb(248, 240, 240);
  align-items: center;
  margin: 0px auto;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.1);
  }
`;

// import styled from '@emotion/styled';

//
//
