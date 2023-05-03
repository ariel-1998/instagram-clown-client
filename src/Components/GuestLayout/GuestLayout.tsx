import { Outlet } from "react-router-dom";
import "./GuestLayout.css";

function GuestLayout(): JSX.Element {
  return (
    <>
      <div className="GuestLayout">hello guest</div>
      <Outlet />
    </>
  );
}

export default GuestLayout;
