import styled from "styled-components";

export const TextInput = styled.input`
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 .5rem;
`

export const Label = styled.label`

  `
export const InputDiv = styled.div`
  margin: .5rem;
  position: relative;
  width: 50%;
  height: 30px;
  border: 1px solid lightgray;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

`
export const SelectInput = styled.select`

`

export const MyLocation = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 28px;
  width: 75px;
  background: lightcoral;
  color: white;
  border: none;
`

export const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;

`

export const Option = styled.option`

`

export const Form = styled.form`
  padding: .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: .5rem;
`

export const Button = styled.button`
  padding: .375rem 1rem;
  border: none;
  border-radius: 3px;
  background: 1px solid lightseagreen;
  color: black;
  background-color: white;
  margin: .5rem 0;
  color: white;
  background: lightcoral;
  transition: all 0.3s ease;

  &:hover {
    color: lightcoral;
    background: white;
  }
`