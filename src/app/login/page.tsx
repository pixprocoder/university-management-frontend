import LoginPage from "../components/login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UMS - LOGIN",
};

const page = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default page;
