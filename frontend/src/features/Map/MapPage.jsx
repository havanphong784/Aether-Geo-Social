import Map, {GeolocateControl} from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapControls from "../../components/map/MapControls.jsx";
import {useEffect, useRef} from "react";
import {MapStore} from "../../store/MapStore.jsx";

export default function MapPage() {
  const GOONG_MAP_KEY = import.meta.env.VITE_GOONG_API_KEY;
  const mapRef = useRef(null);
  const setMapRef = MapStore(state => state.setMapRef);
  const geolocateControlRef = useRef(null);
  const setGeolocateControlRef = MapStore(state => state.setGeolocateControlRef);
  const setIsLocating = MapStore(state => state.setIsLocating);

  useEffect(() => {
    console.log("m")
    setMapRef(mapRef);
    setGeolocateControlRef(geolocateControlRef);
  }, [mapRef, setMapRef, geolocateControlRef, setGeolocateControlRef]);

  return <>
    <div className="w-full h-screen relative">

      <Map
        ref={mapRef}
        mapStyle={`https://tiles.goong.io/assets/goong_map_web.json?api_key=${GOONG_MAP_KEY}`}
        minZoom={3}
        maxZoom={20}
        mapLib={maplibregl}
        antialias={true}
        attributionControl={false}
        initialViewState={{longitude: 108.249476, latitude: 15.972143, zoom: 15, pitch: 45, bearing: 0}}
        style={{width: '100%', height: '100%'}}
      >
        <GeolocateControl
          ref={geolocateControlRef}
          style={{display: "none"}}
          trackUserLocation
          showUserHeading
          showAccuracyCircle
          positionOptions={{
            enableHighAccuracy: true,
          }}
          fitBoundsOptions={{
            zoom: 18
          }}
          onGeolocate={(q) => setIsLocating(!q)}
          onError={() => setIsLocating(false)}
          onTrackUserLocationEnd={() => setIsLocating(false)}
        />
        <MapControls/>
      </Map>
    </div>
  </>
}