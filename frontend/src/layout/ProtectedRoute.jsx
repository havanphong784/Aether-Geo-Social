import {useAuthStore} from "../store/AuthStore.jsx";
import {useNavigate} from "react-router-dom";
import {SpinnerIcon} from "../components/Icon.jsx";


export const ProtectedRoutes = ({children}) => {
  const user = useAuthStore(state => state.user);
  const loading = useAuthStore(state => state.loading);
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-obsidian">
        <div className="flex flex-col items-center gap-4">
          <SpinnerIcon size={40} className="text-cyan-glow animate-spin"/>
          <span className="text-cyan-glow/50 text-[10px] font-bold uppercase tracking-[0.2em] animate-pulse">
            Đang xác thực...
          </span>
        </div>
      </div>
    );
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  return children;
}