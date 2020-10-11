import styled from "styled-components"

export const BlurredBackground = styled.div`
  background-image: ${({img}) => (`url(${img.img})`)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transition: all .5s ease;
  z-index: -1;
  filter: blur(.25rem);
`