import React from "react";

function Logout() {
    localStorage.setItem('loginState', false);
    window.location.href = "./"
  return (
    <section>     
    </section>
  );
}
export default Logout;
