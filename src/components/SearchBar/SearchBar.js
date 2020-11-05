import React from "react";
import {
  Form,
  FormGroup,
  Button,
  ButtonGroup
} from "reactstrap";
import { FormInput, FormLabel, LocationButton, InputContainer } from "./SearchBar.components";
import { FaSearchLocation } from "react-icons/fa";
import { RiFahrenheitFill, RiCelsiusFill } from "react-icons/ri";


export default function SearchBar({
  units,
  setUnits,
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
        <InputContainer>
          <FormInput className="mx-0" style={{height: '50px', fontSize: "1.5rem"}} defaultValue={locationObj.city} name="location" placeholder="City Name.." />
          <ButtonGroup
            style={{width: "100px", height: "50px", position: "absolute", top:"0", right: "0"}} className="d-flex justify-content-center align-items-center"
          >
          <Button style={{height: "100%", borderRadius: "0"}} className="p-0 m-0" color="info" active={units === "metric"} onClick={() => units !== 'metric' ? setUnits('metric') : ""}><RiCelsiusFill /></Button>
          <Button style={{height: "100%", borderRadius: "0", borderTopRightRadius: "3px", borderBottomRightRadius: "3px"}} className="p-0 m-0" color="info" active={units === "imperial"} onClick={() => units === 'metric' ? setUnits('imperial') : ""}><RiFahrenheitFill /></Button>
          </ButtonGroup>
        </InputContainer>
      </FormGroup>
      <FormGroup  className="text-center">
        <Button className="btn-outline-light btn-lg btn">Search</Button>
        <p className="mb-0">Or</p>
        <Button type="button" className="btn-lg btn btn-outline-light" onClick={getCoords} color="info">Get My Location</Button>
      </FormGroup>
    </Form>
  )
}