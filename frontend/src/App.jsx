import {Route, Routes} from "react-router-dom";
import MapPage from "./features/Map/MapPage.jsx";
import LoginPage from "./features/Auth/LoginPage.jsx";
import {ProtectedRoutes} from "./layout/ProtectedRoute.jsx";
import DiscoveryPage from "./features/Discovery/DiscoveryPage.jsx";
import ProfilePage from "./features/Profile/ProfilePage.jsx";
import LandingPage from "./features/LandingPage/LandingPage.jsx";
import {AppLayout} from "./layout/AppLayout.jsx";

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route element={<AppLayout/>}>

        <Route path="/discover" element={
          <ProtectedRoutes>
            <DiscoveryPage/>
          </ProtectedRoutes>
        }/>

        <Route path="/map" element={
          <ProtectedRoutes>
            <MapPage/>
          </ProtectedRoutes>
        }/>

        <Route path="/notifications" element={
          <ProtectedRoutes>
            <Notification/>
          </ProtectedRoutes>
        }/>

        <Route path="/profile/:uid" element={
          <ProtectedRoutes>
            <ProfilePage/>
          </ProtectedRoutes>
        }/>

        <Route path="/profile" element={
          <ProtectedRoutes>
            <ProfilePage/>
          </ProtectedRoutes>
        }/>
      </Route>
      <Route path="*" element={<MapPage/>}/>
    </Routes>
  </>
}