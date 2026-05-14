import {NavLink} from "react-router-dom";
import {motion} from "framer-motion";
import {DiscoverIcon, NotificationIcon} from "../components/common/Icons.jsx";
import {MapIcon, UserIcon} from "lucide-react";
import {useAuthStore} from "../store/AuthStore.jsx";
import {useMemo} from "react";

export default function MenuBottom() {
  const user = useAuthStore(state => state.user);

  const navItems = useMemo(() => [
    {icon: MapIcon, path: '/', label: 'Bản đồ'},
    {icon: DiscoverIcon, path: '/discover', label: 'Khám phá'},
    {
      icon: NotificationIcon,
      path: '/notifications',
      label: 'Thông báo',
    },
    {
      icon: UserIcon,
      path: user ? `/profile/${user.uid}` : '/login',
      label: user ? 'Hồ sơ' : 'Đăng nhập',
    },
  ], [user]);

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[1000] w-[95%] sm:w-[80%] max-w-lg">
      <nav
        className="glass-panel py-1 sm:py-1.5 px-4 sm:px-6 flex justify-between items-center shadow-2xl border-white/5 bg-obsidian/85 backdrop-blur-3xl rounded-2xl sm:rounded-xl">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            className={({isActive}) => `
              relative flex flex-col items-center gap-0.5 px-4 py-2 rounded-xl transition-all duration-300
              ${isActive ? 'text-cyan-glow bg-cyan-glow/5' : 'text-zinc-500 hover:text-white hover:bg-white/5'}
            `}
          >
            {({isActive}) => (
              <>
                <item.icon size={20}
                           className={isActive ? 'drop-shadow-[0_0_8px_rgba(0,245,255,0.5)]' : 'transition-transform group-hover:scale-110'}/>
                {item.badge && (
                  <motion.span
                    initial={!mobile ? {scale: 0} : {}}
                    animate={!mobile}
                    className="absolute top-1 right-2 w-4 h-4 bg-sunset text-white text-[9px] font-black rounded-full flex items-center justify-center border border-obsidian shadow-sunset">
                    {item.badge > 9 ? '9+' : item.badge}
                  </motion.span>
                )}
                <span className="hidden sm:block text-[9px] font-bold tracking-wider uppercase mt-1">
                  {item.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId={!mobile ? "activeIndicator" : undefined}
                    className="absolute -bottom-1 w-4 h-0.5 bg-cyan-glow rounded-full shadow-neon"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}