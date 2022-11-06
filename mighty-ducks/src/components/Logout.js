import React from "react";
import { updateNavBar } from "./AirNavBar";

function Logout() {
    localStorage.setItem('loginState', false);
    window.location.href = "./"
  return (
    <section>     
    </section>
  );
}
export default Logout;
