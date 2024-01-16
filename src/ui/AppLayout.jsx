import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <>
      <main className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center p-4 md:p-10">
        <Header />
        <Outlet />
      </main>
    </>
  );
}

export default AppLayout;
