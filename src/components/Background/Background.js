import React from "react"
import { BlurredBackground } from "./Background.components";

export default function Background(img) {
  console.log(img)
  return(
    
    <BlurredBackground img={img}/>
  )
}