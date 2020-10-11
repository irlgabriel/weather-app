import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1300px;
  padding: 1.5rem;
  margin: 0 auto;
  min-height: 100vh;
`