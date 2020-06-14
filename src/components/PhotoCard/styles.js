import styled from "styled-components";
import { fadeIn } from "../../styles/animation";

export const Article = styled.article`
  min-height: 200px;
`;

export const ImgWrapper = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 0;
  border-radius: 10px;
  padding: 56.25% 0 0 0;
  overflow: hidden;
`;

export const Img = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  ${fadeIn()}
`;
