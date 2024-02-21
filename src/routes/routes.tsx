import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../page/Home/Home";
import { Auth } from "../page/Auth/Auth";
import { NotFound } from "../page/NotFound";
import { Layout } from "../layout/Layout";
import { Route as AppRoute } from "../constants/routes";

export const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path={AppRoute.Home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={AppRoute.Auth} element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
