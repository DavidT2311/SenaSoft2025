import React from "react";
import { Route, Routes } from "react-router";
import ClientLayout from "./src/layouts/ClientLayout";
import VuelosPage from "./src/features/vuelos/pages/VuelosPage";
import ReservationPage from "./src/features/reservations/pages/ReservationPage";
import AsientosPage from "./src/features/asientos/pages/AsientosPage";
import PagosPage from "./src/features/pagos/pages/PagosPage";
import TicketPage from "./src/features/tiquetes/pages/TicketPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<ClientLayout />}>
        <Route path="/" element={<VuelosPage />} />
        <Route path="reserva" element={<ReservationPage />} />
        <Route path="asientos" element={<AsientosPage />} />
        <Route path="pagos" element={<PagosPage />}/>
        <Route path="tiquetes" element={<TicketPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
