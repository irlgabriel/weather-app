import React from "react"
import {
  Form,
  TextInput,
  Button,
  SelectInput,
  Option,
  Label,
  InputDiv,
  MyLocation,
} from "./SearchBar.components";

export default function SearchBar({
  getWeatherObj,
  locationObj,
  setLocationObj,
  getMyLocation
}) {
  function submitHandler(e) {
    e.preventDefault();
    const location = e.target.location.value;
    setLocationObj({city: location})
    getWeatherObj(location);
  }

  return(
    <Form onSubmit={submitHandler}>
      <InputDiv>
        <TextInput defaultValue={locationObj.city} name="location" placeholder="City Name.." />
        <MyLocation type="button">My Location</MyLocation>
      </InputDiv>
      <Label htmlFor="units">Units: </Label>
      <SelectInput name="units" defaultValue="metric">
        <Option value="metric">Metric</Option>
        <Option value="imperial">Imperial</Option>
      </SelectInput>
      <Button>Search</Button>
    </Form>
  )
}