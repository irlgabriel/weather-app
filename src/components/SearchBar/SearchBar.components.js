import styled from "styled-components"
import { Input, Label, Button } from "reactstrap"

export const FormInput = styled(Input)`
  width: 50%;
  margin: 0 auto;
  position: relative;
  padding-right: 30px;

  @media screen and (max-width: 768px) {
    width: 90%; 
  }
`

export const FormLabel = styled(Label)`

`
