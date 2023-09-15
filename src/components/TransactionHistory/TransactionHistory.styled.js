import styled from 'styled-components';

export const Table = styled.table`
  width: 750px;
  margin: 30px auto;
  border: 1px solid #000;
  border-radius: 7px;
  -webkit-box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.65);
  box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.65);
    
  padding-top: 2px;
`;

export const THead = styled.thead`
  background-color: #adadad;
`;

export const TBody = styled.tbody``;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f3f6f9;
  }
`;

export const Th = styled.th`
  padding: 8px;
`;

export const Td = styled.td`
  padding: 8px;
  text-align: center;
`;
