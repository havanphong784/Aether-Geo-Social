import ActionButton from "../common/ActionButton.jsx";
import {LocateIcon, SpinnerIcon} from "../common/Icons.jsx";
import {MapStore} from "../../store/MapStore.jsx";

export default function LocateButton() {
  const geolocateControl = MapStore(state => state.geolocateControlRef);
  const isLocating = MapStore(state => state.isLocating);
  const setIsLocating = MapStore(state => state.setIsLocating);
  const isTracking = MapStore(state => state.isTracking);
  const setIsTracking = MapStore(state => state.setIsTracking);

  const onLocate = () => {
    if (!geolocateControl?.current) return;

    if (isTracking) {
      setIsTracking(false);
      setIsLocating(false);
    } else {
      setIsTracking(true);
      setIsLocating(true);
      geolocateControl.current.trigger();
    }
  };

  return (
    <ActionButton
      variant="icon"
      size="icon"
      onClick={onLocate}
      disabled={isLocating}
      className="border-glass-border-bright bg-white/90 shadow-glass backdrop-blur-2xl"
      aria-label="Định vị vị trí của bạn"
    >
      {isLocating
        ? <SpinnerIcon size={20} className="text-cyan-glow animate-spin"/>
        : <LocateIcon size={20} className="text-cyan-glow"/>}
    </ActionButton>
  )
}