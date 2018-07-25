import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 50px;
  background-color: rgb(56, 54, 55);
  border: 0;
  outline: none;
  font-size: 20px;
  color: #fff;
  transition: .3s;

  &:hover {
    cursor: pointer;
    background-color: rgb(41, 120, 77);
    transition: .3s;
  }
`

const PrimaryButton = ({ name, event }) =>
  <Button
    onClick={event}>
    {name}
  </Button>

export default PrimaryButton;