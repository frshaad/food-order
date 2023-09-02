import { Outlet } from "react-router-dom";
import { Header } from ".";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-20 p-3 px-4 md:mt-24 md:p-6 md:px-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
