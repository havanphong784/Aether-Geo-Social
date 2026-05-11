import MenuBottom from "./MenuBottom.jsx";

export const AppLayout = ({children}) => {
  return <>
    <div className="w-full h-screen relative">
      {children}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-1000 w-[95%] sm:w-[80%] max-w-lg">
        <MenuBottom/>
      </div>
    </div>
  </>
}