import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  width: 400px;
  box-shadow: 0 0 10px #3d2f26ed;
  border-radius: 10px;
  margin: 20px auto;
`;

export const Table = styled.section`
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  border: 2px solid #7e6f7498;
  background-color: #7e6f7449;
  border-radius: 5p;
`;

export const Tittle = styled.div`
  font-size: 18px;
  color: white;
  background-color: #813a0eed;
`;

export const Tittlerow = styled.div`
  text-align: left;
  padding: 16px;
`;

export const Row = styled.div`
  text-align: left;
  padding: 16px;
`;
export const Item = styled.div`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
