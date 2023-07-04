import React,{useState} from "react"
 const Child =({Age,Percentage,City,JobExperience})=>{
    const [ isEligible, setIsEligible]=useState("")
    const debounce = (func, wait) => {  
        let timeout;  
        return function mainFunction() {    
             clearTimeout(timeout);  
          timeout = setTimeout(()=>func(), wait);  
        };  
      };  

    const verify =()=>{
      // Perform the eligibility check
            const isEligible =
              parseInt(Age) > 21 &&
              parseFloat(Percentage) > 60 &&
              City.charAt(0).toUpperCase()+City.slice(1) === 'Bengaluru' &&
              parseInt(JobExperience) > 2;
              console.log( City.charAt(0).toUpperCase()+City.slice(1) === 'Bengaluru' );
            setIsEligible(isEligible ?"Pass" : "Rejected")
      }
return (
    <>
    <button onClick={debounce(verify,1000)} >Submit</button>
    <h1>{isEligible}</h1>
    </>
)
 }
 export default Child;