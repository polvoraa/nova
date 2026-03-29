const FALLBACK_API_URL = "https://nova-09wl.onrender.com";

export const API_BASE_URL =
  import.meta.env.VITE_API_URL?.replace(/\/$/, "") || FALLBACK_API_URL;

export const apiUrl = (path) => `${API_BASE_URL}${path}`;
