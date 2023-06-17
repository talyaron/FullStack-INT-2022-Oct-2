// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

// route data
import { ROUTE_DATA } from "./routeData";

import { FC } from "react";
import Layout from "../components/Layout/Layout";

const RouteMaster: FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {ROUTE_DATA.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <route.component />
                </Layout>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouteMaster;
