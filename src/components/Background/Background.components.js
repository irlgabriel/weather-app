import styled from "styled-components"

export const BlurredBackground = styled.div`
  position: absolute;
  z-index: -5;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url("/images/img1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(.5rem);
`