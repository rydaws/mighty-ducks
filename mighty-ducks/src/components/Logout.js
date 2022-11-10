import React from "react";

function Logout() {
    localStorage.setItem('loginState', false);
    localStorage.removeItem('user');
    window.location.href = "./"
  return (
    <section>     
    </section>
  );
}
export default Logout;
