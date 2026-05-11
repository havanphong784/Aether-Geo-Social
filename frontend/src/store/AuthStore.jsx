import {create} from "zustand";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import {auth, googleProvider} from "../config/firebase.js";

const getErrorMessage = (err, fallback = "Lỗi xác thực") =>
  err?.message || err?.error?.message || fallback;

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  init: () => {
    return onAuthStateChanged(auth, (user) => {
      set({user: user ?? null, loading: false});
    });
  },

  loginWithEmail: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      set({ user: cred.user, loading: false });
      return { success: true, user: cred.user };
    } catch (err) {
      const message = getErrorMessage(err);
      set({ error: message, loading: false });
      return { success: false, message };
    }
  },

  registerWithEmail: async (email, password, displayName) => {
    set({ loading: true, error: null });
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName && cred.user) {
        await updateProfile(cred.user, { displayName });
      }
      set({ user: auth.currentUser, loading: false });
      return { success: true, user: auth.currentUser };
    } catch (err) {
      const message = getErrorMessage(err);
      set({ error: message, loading: false });
      return { success: false, message };
    }
  },

  loginWithGoogle: async () => {
    set({ loading: true, error: null });
    try {
      const result = await signInWithPopup(auth, googleProvider);
      set({ user: result.user, loading: false });
      return { success: true, user: result.user };
    } catch (err) {
      const message = getErrorMessage(err);
      set({ error: message, loading: false });
      return { success: false, message };
    }
  },

  logout: async () => {
    set({ loading: true, error: null });
    try {
      await signOut(auth);
      set({ user: null, loading: false });
      return { success: true };
    } catch (err) {
      const message = getErrorMessage(err);
      set({ error: message, loading: false });
      return { success: false, message };
    }
  },

  resetPassword: async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (err) {
      const message = getErrorMessage(err);
      return { success: false, message };
    }
  },

  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error })
}));