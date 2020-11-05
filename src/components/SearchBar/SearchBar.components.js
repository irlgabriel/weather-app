import styled from "styled-components"
import { Input, Label, Button, Container} from "reactstrap"

export const FormInput = styled(Input)`
  
`

export const FormLabel = styled(Label)`

`
export const InputContainer = styled(Container)`
  padding: 0;
  width: 50%;
  position: relative;
  @media screen and (max-width: 768px) {
    width: 90%; 
  }
`