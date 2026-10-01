import { Outlet } from "react-router";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Root;