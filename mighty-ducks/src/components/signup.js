import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { updateNavBar } from "./AirNavBar";
import zxcvbn from "zxcvbn";
import PasswordStrengthBar from "react-password-strength-bar";

window.onload = async function hideDivs() {
  updateNavBar();
  document.getElementById("loginFailed").style.display = "none";
};

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
    if (value.password) {
      console.log(zxcvbn(value.password));
    }
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    if (zxcvbn(form.password).score < 3) {
      console.log("SCORE TOO LOW!")
      alert("Score too low")
      return;
    }
    e.preventDefault();
    for (let i = 0; i < records.length; i++) {
      if (form.username === records[i].username) {
        console.log("Found at: " + records[i].username);
        loginFailed();
        return;
      } else {
        console.log("not found");
      }
    }
    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    await fetch("http://localhost:3000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({ username: "", password: "" });
    navigate("/");
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

  // This following section will display the form that takes the input from the user.
  return (
    <section>
      <div className="card">
      <h4 className="card-header">Signup</h4>
        <div className="card-body">
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Create a username</label>
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
              <label htmlFor="password">Create a password</label>
              <input
                type="password"
                placeholder="Password"
                className="form-control"
                id="password"
                title="The password length must be greater than or equal to 8
              The password must contain one or more uppercase characters
              The password must contain one or more lowercase characters
              The password must contain one or more numeric values
              The password must contain one or more special characters"
                value={form.password}
                onChange={(e) => updateForm({ password: e.target.value })}
              />
              <strong>Password strength must be &gt; 2</strong>
            </div>
            <PasswordStrengthBar password={form.password} />

            <div className="text-danger" id="loginFailed">
              Username already in use!
            </div>
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
      </div>
    </section>
  );
}
