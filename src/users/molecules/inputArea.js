import React from 'react';
import styled from 'styled-components';
import InputIcon from '../atoms/inputIcon';
import InputField from '../atoms/inputField';
const Div = styled.div`
  display: flex;
  justify-content:center;
  margin-bottom:3%;
  height:15%;
  transform:translateY(-50%)
`;
const InputArea = props => {
  return (
    <Div>
      <InputIcon name={props.icon} />
      <InputField name={props.description} type={props.type} />
    </Div>
  );
};
export default InputArea;
