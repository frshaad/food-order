import { Outlet } from "react-router-dom";
import { Header } from ".";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-16 p-8 md:mt-24">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
