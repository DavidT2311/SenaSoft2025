import React from "react";
import { Route, Routes } from "react-router";
import ClientLayout from "./src/layouts/ClientLayout";
import VuelosPage from "./src/features/vuelos/pages/VuelosPage";
import ReservationPage from "./src/features/reservations/pages/ReservationPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route path="/" element={<VuelosPage />} />
        <Route path="reserva" element={<ReservationPage />} />
        <Route path="asientos" />
        <Route path="pagos" />
        <Route path="asientos" />
        <Route path="tiquetes" />
      </Route>
    </Routes>
  );
};

export default Router;
