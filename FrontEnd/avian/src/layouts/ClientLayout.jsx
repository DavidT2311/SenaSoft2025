import React from "react";
import { Outlet } from "react-router";
import "./client.css";
import Button from "../shared/components/Button";

const ClientLayout = () => {
  return (
    <>
      <header>
        <div className="content">
          <h2>AVIAN.NET</h2>
          <img
            src="../public/images/icono1.png"
            alt="icono"
            className="icono"
          />
        </div>
        <div className="content-log">
          <Button text={"Login"} />
          <Button text={"Register"} />
        </div>
      </header>

      <main className="clientlayout-main">
        <Outlet />
      </main>

      <footer>
        <h2 className="footer-title">AVIAN.NET</h2>
        <img src="../public/images/icono1.png" alt="icono" className="icono" />
      </footer>
    </>
  );
};

export default ClientLayout;
