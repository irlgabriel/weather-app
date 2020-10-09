import React from "react"
import {
  Form,
  TextInput,
  Button,
  SelectInput,
  Option,
  Label,
  ColumnFlex,
} from "./SearchBar.components";

export default function SearchBar({
  units,
  setUnits,
  city,
  setCity,
}) {
  return(
    <Form>
      <TextInput placeholder="Location.." />
      <Label htmlFor="units">Units: </Label>
      <SelectInput defaultValue="metric">
        <Option value="metric">Metric</Option>
        <Option value="imperian">Imperial</Option>
      </SelectInput>
      <Button>Search</Button>
    </Form>
  )
}