import { FC } from "react";
import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export const Layout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
