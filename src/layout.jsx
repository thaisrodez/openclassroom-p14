import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="my-4">
      <Outlet />
    </div>
  );
}
