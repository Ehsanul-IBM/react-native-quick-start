import React from 'react';
import styled from 'styled-components/native';
import { s } from 'react-native-size-matters';

const Wrapper = styled.View`
  height: auto;
  width: ${s(140)}px;
  background-color: green;
  opacity: 1;
  border: ${s(4)}px;
  padding: ${s(10)}px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Label = styled.Text`
  font-size: ${s(20)}px;
  text-align: center;
`;

const Render = () => (
  <Wrapper>
    <Label>Tap To Navigate</Label>
  </Wrapper>
);

export default Render;
