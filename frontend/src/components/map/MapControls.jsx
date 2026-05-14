import {LocateControl} from "./LocateControl.jsx";

const MapControls = () => {

  return (
    <>
      <div className="absolute right-3 top-40 flex flex-col gap-2 sm:right-6 sm:top-1/2 sm:-translate-y-1/2 sm:gap-3">
        <LocateControl/>
      </div>
    </>
  );
};

export default MapControls;