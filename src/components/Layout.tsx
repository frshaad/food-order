import { Outlet } from "react-router-dom";
import { Header } from ".";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mt-24 p-8">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
