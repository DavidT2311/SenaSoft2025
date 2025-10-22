import React from "react";
import { Route, Routes } from "react-router";
import ClientLayout from "./src/layouts/ClientLayout";
import VuelosPage from "./src/features/vuelos/pages/VuelosPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route path="/" element={<VuelosPage />} />
        <Route path="reservas" />
        <Route path="asientos" />
        <Route path="pagos" />
        <Route path="asientos" />
        <Route path="tiquetes" />
      </Route>
    </Routes>
  );
};

export default Router;
