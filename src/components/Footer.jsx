import React from "react";

function Footer() {
  let d = new Date().getFullYear();
  return (
    <footer>
      <p>
        {" "}
        copyright
        {d}
      </p>
    </footer>
  );
}

export default Footer;
