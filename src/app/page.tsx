import { redirect } from "next/navigation";
import React from "react";

const RootHomePage = () => {
  return redirect("/profile");
};

export default RootHomePage;
