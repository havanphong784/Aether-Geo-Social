import Map from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import MapControls from "../../components/map/MapControls.jsx";

export default function MapPage() {
  const GOONG_MAP_KEY = import.meta.env.VITE_GOONG_API_KEY;

  return <>
    <div className="w-full h-screen relative">

      <Map
        mapStyle={`https://tiles.goong.io/assets/goong_map_web.json?api_key=${GOONG_MAP_KEY}`}
        minZoom={3}
        maxZoom={20}
        mapLib={maplibregl}
        antialias={true}
        attributionControl={false}
        initialViewState={{longitude: 108.249476, latitude: 15.972143, zoom: 15, pitch: 45, bearing: 0}}
        style={{width: '100%', height: '100%'}}
      >
        <MapControls/>
      </Map>
    </div>
  </>
}