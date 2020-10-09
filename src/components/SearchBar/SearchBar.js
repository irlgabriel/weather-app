import React from "react"
import {
  Form,
  TextInput,
  Button
} from "./SearchBar.components";
export default function SearchBar() {
  return(
    <Form>
      <TextInput placeholder="Location.." />
      <Button>Search</Button>
    </Form>
  )
}