import React from "react"
import {
  Form,
  TextInput,
  Button,
  SelectInput,
  Option,
  Label,
} from "./SearchBar.components";

export default function SearchBar({
  getWeatherObj,
}) {
  function submitHandler(e) {
    e.preventDefault();
    const units = e.target.units.value;
    const location = e.target.location.value;
    getWeatherObj(location, units)
  }

  return(
    <Form onSubmit={submitHandler}>
      <TextInput name="location" placeholder="Location.." />
      <Label htmlFor="units">Units: </Label>
      <SelectInput name="units" defaultValue="metric">
        <Option value="metric">Metric</Option>
        <Option value="imperian">Imperial</Option>
      </SelectInput>
      <Button>Search</Button>
    </Form>
  )
}