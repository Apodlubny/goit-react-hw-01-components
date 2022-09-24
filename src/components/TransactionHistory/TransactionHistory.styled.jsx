import styled from '@emotion/styled';
export const ContainerTransaction = styled.table`
  width: 95%;
  background-color: white;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 1rem 1rem 2rem rgb(65, 64, 64), -1rem -1rem 2rem rgb(82, 81, 81);
`;
export const Title = styled.th`
  background-color: #35649a;
  padding: 10px 0;
  border-radius: 10px;
`;
export const Pocket = styled.tr`
  text-align: center;
  &:nth-child(2n + 2) {
    background-color: #80808073;
  }
`;
export const Column = styled.th`
  padding: 20px 0;
`;
