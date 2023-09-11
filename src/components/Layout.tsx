import { Outlet } from "react-router-dom";

import { Header } from ".";
import Cart from "./cart";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto w-11/12">
        <Outlet />
      </main>
      <Cart />
    </>
  );
};

export default Layout;
