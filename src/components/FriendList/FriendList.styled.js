import styled from 'styled-components';

export const List = styled.ul`
  margin: 30px auto;
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 7px;
  -webkit-box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.65);
  box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.65);
  gap: 10px;
`;
