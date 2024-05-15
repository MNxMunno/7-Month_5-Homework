import React from "react";
import notFound from "../../assets/images/not_found.jpg";

const NotFound = () => {
  return (
    <div
      style={{
        paddingTop: "80px",
        width: "100%",

        objectFit: "contain",
      }}
    >
      <img src={notFound} alt="img" />
    </div>
  );
};

export default NotFound;
