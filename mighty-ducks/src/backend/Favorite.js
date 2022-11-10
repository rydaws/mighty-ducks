import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   userId: "",
   Flight: "",
   favorite: "",
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
   const newFavorite = { ...form };
 
   await fetch("http://localhost:3000/favorite/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newFavorite),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ userId: "", Flight: "", favorite: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
       <div className="Favorite">
      <button className="Favorite" type="button">Favorite</button>
       </div>
   </div>
 );
}