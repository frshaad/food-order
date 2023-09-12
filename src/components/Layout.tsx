import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header } from ".";
import Cart from "./cart";

const Layout = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Header setIsCartOpen={setIsCartOpen} />
      <main className="mx-auto w-11/12">
        <Outlet />
      </main>
      <Cart isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />
    </>
  );
};

export default Layout;
