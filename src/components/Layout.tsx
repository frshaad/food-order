import { Outlet } from "react-router-dom";

import { Header } from ".";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mx-auto w-11/12">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
