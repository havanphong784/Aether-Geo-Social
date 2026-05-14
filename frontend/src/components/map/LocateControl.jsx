import ActionButton from "../common/ActionButton.jsx";
import {LocateIcon, SpinnerIcon} from "../common/Icons.jsx";
import {useRef, useState} from "react";
import {GeolocateControl} from "react-map-gl/maplibre";

export const LocateControl = () => {
  const controlButton =
    "border-glass-border-bright bg-white/90 shadow-glass backdrop-blur-2xl";

  const [isLocating, setIsLocating] = useState(false);
  const geolocateControlRef = useRef(null);

  const onLocate = () => {
    setIsLocating(true);

    geolocateControlRef.current?.trigger();

    setTimeout(() => {
      setIsLocating(false);
    }, 3000);
  };

  return (
    <>
      <GeolocateControl
        ref={geolocateControlRef}
        style={{display: "none"}}
        trackUserLocation
        showUserHeading
        showAccuracyCircle
        positionOptions={{
          enableHighAccuracy: true,
        }}
        onGeolocate={() => {
          setIsLocating(false);
        }}
        onError={() => {
          setIsLocating(false);
        }}
        onTrackUserLocationEnd={() => {
          setIsLocating(false);
        }}
      />

      <ActionButton
        variant="icon"
        size="icon"
        onClick={onLocate}
        disabled={isLocating}
        className={controlButton}
        aria-label="Định vị vị trí của bạn"
      >
        {isLocating ? (
          <SpinnerIcon size={20} className="text-cyan-glow animate-spin"/>
        ) : (
          <LocateIcon size={20} className="text-cyan-glow"/>
        )}
      </ActionButton>
    </>
  );
};

