import React, { useEffect, useState } from "react";
import "../custom.scss";
import { useNavigate } from "react-router";
import { updateNavBar } from "./AirNavBar";
var loggedIn = false;


window.onload = async function update (){
  updateNavBar();
  document.getElementById("test").innerHTML = loggedIn;
}
export default function Login() {
  function updateState() {
    loggedIn = true;
    document.getElementById("test").innerHTML = loggedIn;
  }
  
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  
  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  
  // This function will handle the submission.
  async function onSubmit(e) {
    
    e.preventDefault();
  
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    await fetch("http://localhost:3000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
    .catch(error => {
      window.alert(error);
      return;
    });
  
    setForm({ username: "", password: "" });
    navigate("/");
  }



//-------------------------------------------------------//
  // const [records, setRecords] = useState([]);
  
  // useEffect(() => {
  //   async function getRecords() {
  //     const response = await fetch(`http://localhost:3000/record/`);
  
  //     if (!response.ok) {
  //       const message = `An error occurred: ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }
  
  //     const records = await response.json();
      
  //     console.log(records);

  //     // this shows that we can use the records array to compare data
  //     document.getElementById("test").innerHTML = records[0].username

  //     setRecords(records);
  //   }
  
  //   getRecords();
  

  //   return;
  // }, [records.length]); 
  
  // USE PATTERN FOR PASSWORD STRENGTH
  return (
<section>
   <div>
     <h3>Login</h3>
     <div id="test">h</div>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="username">Username</label>
         <input
           type="text"
           placeholder="Username"
           className="form-control"
           id="username"
           value={form.username}
           onChange={(e) => updateForm({ username: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input
           type="password"
           placeholder="Password"
           className="form-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Submit"
           className="btn btn-primary"
         />
       </div>
       <div>
        <input
        type="button"
        value="state"
        onClick={updateState}
        />
       </div>
     </form>
   </div>
   </section>
  );
}
