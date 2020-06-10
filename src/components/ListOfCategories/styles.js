import styled, { css } from "styled-components";

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${(props) =>
    props.fixed &&
    css`
      position: fixed;
      z-index: 1;
      max-width: 400px;
      top: -20px;
      left: 0;
      right: 0;
      border-radius: 60px;
      padding: 5px;
      margin: 0 auto;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      background: #fff;
      transform: scale(0.5);
    `}
`;
export const Item = styled.li`
  padding: 0;
`;
