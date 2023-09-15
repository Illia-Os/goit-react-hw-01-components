import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 30px auto;
  width: 300px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid #000;
  -webkit-box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.65);
  box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.65);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 15px;
`;

export const AvatarWrapper = styled.div`
  margin-bottom: 30px;
  width: 120px;
  border-radius: 50%;
  border: 1px solid #000;
  overflow: hidden;
  -webkit-box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.4);
  box-shadow: 50px 50px 0px -30px rgba(0, 0, 0, 0),
    0px 0px 20px 6px rgba(0, 0, 0, 0.4);
`;

export const Avatar = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export const Name = styled.p`
  margin-bottom: 10px;

  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  color: #737373;
`;

export const Location = styled.p`
  font-weight: 500;
  color: #737373;
`;

export const StatsWrapper = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(100% / 3);
  padding: 15px 10px;
  background-color: #f3f3f3;
  text-align: center;

  border-top: 1px solid #d3d3d3;
  &:not(:last-child) {
    border-right: 1px solid #d3d3d3;
  }
`;

export const Label = styled.span`
  margin-bottom: 5px;
  color: #737373;
`;

export const Quantity = styled.span`
  font-weight: 500;
`;
