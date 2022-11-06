import React, { useState } from "react";
import { useNavigate } from "react-router";
import { updateNavBar } from "./AirNavBar";
 
window.onload = async function hideDivs() {
  updateNavBar();
  document.getElementById("loginFailed").style.display = "none";
}

export default function Create() {
  function loginFailed() {
    document.getElementById("loginFailed").style.display = "block";
    console.log("USERNAME ALREADY EXISTS");
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
  if (true) {
    loginFailed();
    return;
  }
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
 
 // This following section will display the form that takes the input from the user.
 return (
    <section>
   <div>
     <h3>Signup</h3>
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
       <div className="text-danger" id="loginFailed">Username already in use!</div>
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
        onClick={loginFailed}
        />
        </div>
     </form>
   </div>
   </section>
 );
}