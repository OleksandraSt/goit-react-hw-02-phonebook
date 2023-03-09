import styled from '@emotion/styled';

export const Form = styled.form`
  border: 5px solid #2a2a2a;
  border-radius: 5px;
  width: 500px;
  height: 275px;
  margin: auto;
  background-color: aqua;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-transform: uppercase;
  font-weight: bold;
  line-height: 2;
  font-size: 20px;
  color: #2a2a2a;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 250px;
  height: 25px;
  color: #2a2a2a;
  background-color: aqua;
  border: 2px solid #2a2a2a;
  margin-left: 73px;
`;

export const ButtonAdd = styled.button`
  width: 110px;
  height: 45px;
  text-transform: uppercase;
  background-color: yellow;
  color: #2a2a2a;
  cursor: pointer;
`;