import React from "react"
import {
  Form,
  TextInput,
  Button,
  InputDiv,
} from "./SearchBar.components";

export default function SearchBar({
  setFlash,
  setFlashMessage,
  getWeatherObj,
  locationObj,
  setLocationObj,
}) {
  function submitHandler(e) {
    e.preventDefault();
    const location = e.target.location.value
    if(location === "") {
      setFlashMessage("bad query");
      setFlash(true)
    } else {
      setLocationObj({city: location})
    }
  }


  return(
    <Form onSubmit={submitHandler}>
      <InputDiv>
        <TextInput defaultValue={locationObj.city} name="location" placeholder="City Name.." />
      </InputDiv>
      <Button>Search</Button>
    </Form>
  )
}