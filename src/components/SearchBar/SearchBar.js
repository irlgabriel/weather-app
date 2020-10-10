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
  locationObj,
  setLocationObj,
}) {
  function submitHandler(e) {
    e.preventDefault();
    const units = e.target.units.value;
    const location = e.target.location.value;
    setLocationObj({city: location});
    getWeatherObj(location)
  }

  return(
    <Form onSubmit={submitHandler}>
      <TextInput defaultValue={locationObj.city} name="location" placeholder="City Name.." />
      <Label htmlFor="units">Units: </Label>
      <SelectInput name="units" defaultValue="metric">
        <Option value="metric">Metric</Option>
        <Option value="imperial">Imperial</Option>
      </SelectInput>
      <Button>Search</Button>
    </Form>
  )
}