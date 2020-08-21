import React from 'react';
import styled from 'styled-components/native';
import { s, vs } from '@utils/scale';

const Wrapper = styled.View`
  height: ${vs(406)}px;
  width: ${s(375)}px;
  background-color: green;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Label = styled.Text`
  font-size: ${s(24)}px;
  font-weight: bold;
  text-align: center;
`;

const Render = () => {
  return (
    <Wrapper>
      <Label>Tap To Navigate</Label>
    </Wrapper>
  );
};

export default Render;
