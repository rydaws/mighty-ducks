import React, { useEffect, useState } from "react";
import "../custom.scss";
import { useNavigate } from "react-router";
import { updateNavBar } from "./AirNavBar";


export default function Login() {
  function updateState() {
    localStorage.setItem('loginState', true);
    document.getElementById("test").innerHTML = localStorage.getItem('loginState');
    updateNavBar();
  }

  function loginFailed() {
    document.getElementById("loginFailed").style.display = "block";
    console.log("Account not found");
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
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:3000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();

      console.log(records);
      setRecords(records);
    }
    getRecords();

    return;
  }, [records.length]);

  // This function will handle the submission and verify login.
  async function onSubmit(e) {
    console.log(records);
    e.preventDefault();
    for(let i = 0; i < records.length; i++) {      
      if(form.username === records[i].username && form.password === records[i].password){
      console.log("Found at: " + records[i].username + " " + records[i].password);
      updateState();
      navigate("/");
      return;
      } else {
        console.log("not found");
        loginFailed();
      }
    }

  }

  // USE PATTERN FOR PASSWORD STRENGTH
  return (
<section>
   <div>
     <h3>Login</h3>
     <div id="test"></div>
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
       <div className="text-danger" id="loginFailed">Login error</div>
       <br></br>
       <div className="form-group">
         <input
           type="submit"
           value="Submit"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
   </section>
  );
}
window.onload = function update(){
  updateNavBar();
  document.getElementById("test").innerHTML = localStorage.getItem('loginState');
}