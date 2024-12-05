import React from "react";

const Footer = () => {
  return (
    <footer>
      <span className="my-footer">
        Star Hotel | All Right Reserved &copy; {new Date().getFullYear()}
      </span>
    </footer>
  );
};

export default Footer;
