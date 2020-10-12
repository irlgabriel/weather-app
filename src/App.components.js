import styled from "styled-components"

export const ToggleDiv = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 40px;
  width: 100px;
  background: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 0 5px;
`

export const FlashContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: .5rem 1.25rem;
  background: lightcoral;
  color: white;
  border-radius: 5px
`

export const ToggleUnit = styled.div`
  width: 40px;
  height: 35px;
  z-index: 6;
  border-radius: 50%;
  margin: 0;
  margin-left: ${({units}) => (units === "metric" ? 0 : "auto")};
  transition: all .3s ease-in-out;
  background: lightskyblue;
`

export const LeftToggle = styled.p`
  position: absolute;
  left: 10px;
  z-index: 5;
  font-size: 1.5rem;
`

export const RightToggle = styled.p`
  position: absolute;
  z-index: 5;
  font-size: 1.5rem;
  right: 15px;
  font-size: 1.4rem;
  color: black;
`