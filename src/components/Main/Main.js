import React, { useState, useEffect } from "react";

import MainLayout from "layouts/MainLayout";

const Layout = (props) => {
  console.log("--------========", props);

  return (
    <>
      <MainLayout {...props}>{props.children}</MainLayout>
    </>
  );
};

export default Layout;
