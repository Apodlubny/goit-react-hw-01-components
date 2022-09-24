import styled from '@emotion/styled';

export const ContainerProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #faf0e3;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  img {
    display: block;
    margin: 0 auto;
    border-radius: 50%;
    background-color: gray;
    padding: 20px;
  }
`;
export const DescriptionName = styled.p`
  margin-top: 20px;
  color: black;
  font-size: 24px;
`;
export const DescriptionTag = styled.p`
  margin-top: 5px;
  color: gray;
  font-size: 16px;
`;
export const Stats = styled.ul`
  display: flex;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2b2a2a;
  border: 1px solid black;
  padding: 40px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.1);
`;
export const StatsLabel = styled.span`
  color: white;
  margin-bottom: 10px;
`;
export const StatsQuantity = styled.span`
  color: #1bb2d6;
`;
