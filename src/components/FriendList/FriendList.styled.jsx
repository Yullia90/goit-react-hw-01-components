import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 25px;
  width: 370px;
  box-shadow: 0 0 10px #3d2f26ed;
  border-radius: 10px;
  margin: 20px auto;
`;

export const Card = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: inherit;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  border-bottom: #7e6f7498 2px;
  box-shadow: 0 0 8px #300657ed;
  padding: 20px;
  background-color: #7e6f7449;
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 20px;
`;

export const Photo = styled.img`
  margin-left: 20px;
  width: 80px;
  margin-right: 10px;
`;

export const Name = styled.p`
  align-content: center;
  font-weight: 600;
  font-size: 30px;
  margin-bottom: 15px;
  color: #47222f;
`;