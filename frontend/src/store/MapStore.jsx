import {create} from "zustand";

export const MapStore = create((set) => ({
  mapRef: null,
  setMapRef: (ref) => set({mapRef: ref}),

  geolocateControlRef: null,
  setGeolocateControlRef: (ref) => set({geolocateControlRef: ref}),

  isLocating: false,
  setIsLocating: (value) => set({isLocating: value}),

  userLocation: null,
  setUserLocation: (location) => set({userLocation: location}),

  isTracking: false,
  setIsTracking: (value) => set({isTracking: value}),

}));