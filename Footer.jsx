import React from "react";

function Footer() {

  var curryear = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p> Copyrigth@ {curryear} </p>
         </footer>
    </div>
  );
}

export default Footer;
