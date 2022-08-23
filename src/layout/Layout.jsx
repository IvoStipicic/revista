import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const urlActual = location.pathname;
  return (
    <div className="md:flex md:min-h-screen">
      <div className="w-1/4 bg bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-10">
        <h2 className="text-white font-bold text-3xl text-center mb-3">
          Revista de Tecnología
        </h2>

        <nav>
          <Link
            to="/revista/introduccion"
            className={`${
              urlActual === "/introduccion" ? "text-blue-300" : "text-white"
            } text-2xl block mt-5 hover:text-blue-300`}
          >
            Introducción a la Tecnología
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4  md:h-screen ">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
