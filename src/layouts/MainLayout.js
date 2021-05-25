import React, { useState } from "react";
import Header from "./Header";
function MainLayout(props) {
  console.log("MainLayout", props);
  const { isMenu = true } = props;
  return (
    <>
      <Header {...props} />
      <div id="content" className="row">
        {props.children}
      </div>
    </>
  );
}

export default MainLayout;
