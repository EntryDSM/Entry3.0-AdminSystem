import styled from 'styled-components';

export const AsideNavigationItem = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-bottom: 10px;
  border: 1px solid #fff;

  &:hover {
    cursor: pointer;
  }
`
export const AsideNavigationItemImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 70%;
`