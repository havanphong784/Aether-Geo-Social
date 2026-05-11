import {Route, Routes} from "react-router-dom";
import Map from "./features/Map/Map.jsx";
import Login from "./features/Auth/Login.jsx";
import ProtectedRoutes from "./layout/ProtectedRoute.js";
import Discovery from "./features/Discovery/Discovery.jsx";
import Profile from "./features/Profile/Profile.jsx";

export default function App () {
  return <>
    <Routes>
      <Route path="/" element={<Map/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/discover" element={
        <ProtectedRoutes>
          <Discovery/>
        </ProtectedRoutes>
      }/>

      <Route path="/notifications" element={
        <ProtectedRoutes>
          <Notification/>
        </ProtectedRoutes>
      }/>

      <Route path="/profile/:uid" element={
        <ProtectedRoutes>
          <Profile/>
        </ProtectedRoutes>
      }/>

      <Route path="/profile" element={
        <ProtectedRoutes>
          <Profile/>
        </ProtectedRoutes>
      }/>

      <Route path="*" element={<Map/>}/>
    </Routes>
  </>
}