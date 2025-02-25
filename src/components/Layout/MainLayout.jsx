import MobileNavBar from "../HomePageComponents/MobileNavBar";
import MobileNavBarDropDown from "../HomePageComponents/MobileNavBarDropDown";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
        <div className="fixed z-10 w-full">
            <div className="w-full hidden">
                <MobileNavBarDropDown />
            </div>
            <MobileNavBar />
            </div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout