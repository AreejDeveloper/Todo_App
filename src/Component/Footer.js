import React from 'react';

const Footer = () => {
  let footerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#333",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
  };

  let containerStyle = {
    paddingBottom: "60px" // Adjust this value to accommodate the height of your footer
  };

  return (
    <div style={containerStyle}>
      {/* Your content goes here */}
      <footer style={footerStyle}>
        <p>Copyright&copy;MyToDoList.com</p>
      </footer>
    </div>
  );
};

export default Footer;
