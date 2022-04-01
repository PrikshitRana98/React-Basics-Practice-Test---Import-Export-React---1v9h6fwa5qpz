import React, { Component, useState } from "react";
import '../styles/App.css';
import Heading form "./Heading"
import SubHeading form "./SubHeading"
import InputQuery form "./InputQuery"
import SubmitButton form "./SubmitButton"


const App = () => {
  return (
    <div id="main">
      <Heading />
      <SubHeading />
      <InputQuery/>
      <SubmitButton/>
    </div>
  )
}


