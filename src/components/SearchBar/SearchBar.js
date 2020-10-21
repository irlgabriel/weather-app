import React from "react"
import {
  Form,
  FormGroup,
  Button
} from "reactstrap"
import { FormInput, FormLabel, LocationButton } from "./SearchBar.components"
import { FaSearchLocation } from "react-icons/fa"


export default function SearchBar({
  setFlash,
  setFlashMessage,
  locationObj,
  setLocationObj,
  getCoords
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
      <FormGroup>
        <FormLabel className="text-center w-100 h2" htmlFor="location">City</FormLabel>
        <FormInput style={{height: '50px', fontSize: "1.5rem"}} defaultValue={locationObj.city} name="location" placeholder="City Name.." />
      </FormGroup>
      <FormGroup  className="text-center">
        <Button className="btn-outline-light btn-lg btn">Search</Button>
        <p className="mb-0">Or</p>
        <Button type="button" className="btn-lg btn btn-outline-light" onClick={getCoords} color="info">Get My Location</Button>
      </FormGroup>
    </Form>
  )
}