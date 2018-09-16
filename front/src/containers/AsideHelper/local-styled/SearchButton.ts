import styled from 'styled-components';

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 20px;
  background-color: rgb(143, 185, 204);
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`

export { Button };