import MenuBottom from "./MenuBottom.jsx";
import {Outlet} from "react-router-dom";

export const AppLayout = () => {
  return <>
    <div className="w-full h-screen relative">
      <Outlet/>
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-1000 w-[95%] sm:w-[80%] max-w-lg">
        <MenuBottom/>
      </div>
    </div>
  </>
}