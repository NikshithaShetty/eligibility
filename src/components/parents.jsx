//Q. Write a reactJS Program which will take input a user details and then check wether the person meets the criteria of eligibility or not and then based on eligibility will show a output as Pass or Rejected.

// FirstName
// LastName
// Email
// Age
// 10th Percentage
// City
// Address
// Job Experience
// Hobbies

// Cirterias:

// Age Should be > 21
// 10th percentage > 60%
// City == Bengaluru
// Job Experience > 2 Years

// Condition: The Validations should be performed in child components JS file and all the child components must be

import React, { useState } from "react";
import Child from "./child";

const Parents = () => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Age, setAge] = useState("");
  const [Percentage, setPercentage] = useState("");
  const [City, setCity] = useState("");
  const [Address, setAddress] = useState("");
  const [JobExperience, setJobExperience] = useState("");
  const [Hobbies, setHobbies] = useState("");

  return (
    <>
      <h1>Criteria check</h1>
      <div
        style={{ display: "grid", textAlign: "end", justifyContent: "center" }}
      >
        <label>
          First name:{" "}
          <input
            value={FirstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          Last name:{" "}
          <input
            value={LastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          Email:{" "}
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
          />
        </label>
        <label>
          Age:{" "}
          <input
            value={Age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
            type="number"
          />
        </label>
        <label>
          10th percentage:{" "}
          <input
            value={Percentage}
            onChange={(e) => {
              setPercentage(e.target.value);
            }}
            type="number"
          />
        </label>
        <label>
          Address:{" "}
          <input
            value={Address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          City:{" "}
          <input
            value={City}
            onChange={(e) => {
              setCity(e.target.value);
            }}
            type="text"
          />
        </label>
        <label>
          Job Experince:{" "}
          <input
            value={JobExperience}
            onChange={(e) => {
              setJobExperience(e.target.value);
            }}
            type="number"
          />
        </label>
        <label>
          Hobbies:{" "}
          <input
            value={Hobbies}
            onChange={(e) => {
              setHobbies(e.target.value);
            }}
            type="text"
          />
        </label>
      </div>
      <Child
        Age={Age}
        Percentage={Percentage}
        City={City}
        JobExperience={JobExperience}
      />
    </>
  );
};
export default Parents;
