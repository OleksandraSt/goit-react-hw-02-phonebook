import styled from '@emotion/styled';

export const ContactContainer = styled.ul`
  width: 455px;
  height: 275px;
  margin: auto;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  border: 2px solid #2a2a2a;
  background-color: aqua;
  justify-content: space-between;
  padding: 0px 15px;
`;
export const Contact = styled.p`
  margin: 0;
  padding: 15px;
  font-size: 20px;
  color: grey;
`;
export const ButtonDelete = styled.button`
  width: 75px;
  height: 25px;
  text-align: center;
  justify-content: center;
  background-color: yellow;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;