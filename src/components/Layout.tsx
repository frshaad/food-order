import { Outlet } from "react-router-dom";
import { Header } from ".";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="px-4 md:px-16">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
