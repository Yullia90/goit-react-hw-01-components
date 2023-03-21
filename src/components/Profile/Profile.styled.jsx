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

export const Card = styled.div`
  width: 250px;
  height: 400px;
  color: white;
  padding-top: 10px;
  text-align: center;
  margin: 20px auto;
  border-radius: 5px;
  background-color: #7e6f7449;
  border-bottom: #7e6f7498 2px;
  box-shadow: 0 0 8px #300657ed;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  display: block;
  margin: auto;
  margin-top: 40px;
  border: 2px solid rgb(250, 81, 3);
  cursor: pointer;
  border-bottom: #7e6f7498 2px;
  box-shadow: 0 0 8px #300657ed;
   &:hover {
  box-shadow: 0 0 2px 1px rgba(95, 43, 1, 0.5);`;

export const Info = styled.ul`
  display: flex;
  margin-top: 82px;
  padding: 0;
  height: 70px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
  width: 75px;
  line-height: 100%;
  padding-top: 15px;
  border-radius: 5px;
  margin-bottom: 0;
  cursor: pointer;
  border-bottom: #7e6f7498 2px;
  box-shadow: 0 0 8px #300657ed;
  &:hover {
  box-shadow: 0 0 2px 1px rgba(95, 43, 1, 0.5);
`;

export const Label = styled.span`
  display: block;
  text-align: center;
  font-size: 14px;
  height: 20px;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-size: 16px;
  height: 30px;
`;
