import {Route, Routes} from "react-router-dom";
import MapPage from "./features/Map/MapPage.jsx";
import LoginPage from "./features/Auth/LoginPage.jsx";
import {ProtectedRoutes} from "./layout/ProtectedRoute.jsx";
import DiscoveryPage from "./features/Discovery/DiscoveryPage.jsx";
import ProfilePage from "./features/Profile/ProfilePage.jsx";
import {AppLayout} from "./layout/AppLayout.jsx";
import LandingPage from "./features/LandingPage/LandingPage.jsx";

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>

      <Route path="/map" element={<MapPage/>}/>

      <Route path="/discover" element={
        <ProtectedRoutes>
          <AppLayout>
            <DiscoveryPage/>
          </AppLayout>
        </ProtectedRoutes>
      }/>

      <Route path="/notifications" element={
        <ProtectedRoutes>
          <AppLayout>
            <Notification/>
          </AppLayout>
        </ProtectedRoutes>
      }/>

      <Route path="/profile/:uid" element={
        <ProtectedRoutes>
          <AppLayout>
            <ProfilePage/>
          </AppLayout>
        </ProtectedRoutes>
      }/>

      <Route path="/profile" element={
        <ProtectedRoutes>
          <AppLayout>
            <ProfilePage/>
          </AppLayout>
        </ProtectedRoutes>
      }/>

      <Route path="*" element={<MapPage/>}/>
    </Routes>
  </>
}