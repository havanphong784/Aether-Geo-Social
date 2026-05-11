import {Route, Routes} from "react-router-dom";
import Map from "./features/Map/Map.jsx";
import Login from "./features/Auth/Login.jsx";
import {ProtectedRoutes} from "./layout/ProtectedRoute.jsx";
import Discovery from "./features/Discovery/Discovery.jsx";
import Profile from "./features/Profile/Profile.jsx";
import {AppLayout} from "./layout/AppLayout.jsx";

export default function App() {
  return <>
    <Routes>
      <Route path="/" element={<Map/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/discover" element={
        <ProtectedRoutes>
          <AppLayout>
            <Discovery/>
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
            <Profile/>
          </AppLayout>
        </ProtectedRoutes>
      }/>

      <Route path="/profile" element={
        <ProtectedRoutes>
          <AppLayout>
            <Profile/>
          </AppLayout>
        </ProtectedRoutes>
      }/>

      <Route path="*" element={<Map/>}/>
    </Routes>
  </>
}