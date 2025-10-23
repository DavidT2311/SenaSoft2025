// Zustand
import { create } from "zustand";
// Shared
import { getDataService } from "../../../shared/utils/getDataService";

const baseUrl = "http://127.0.0.1:8383/api/v1";

export const flightsStore = create((set) => ({
  flightsList: [],
  flightCode: null,

  getFlights: async (ida, orig, dest, fida, freg) => {
    set({ flightsList: [] });

    try {
      const data = await getDataService(
        `${baseUrl}/vuelos?${ida ? "ida=" + ida : ""}${
          orig ? "orig=" + orig : ""
        }${dest ? "dest=" + dest : ""}${fida ? "fida=" + fida : ""}${
          freg ? "freg=" + freg : ""
        }`
      );
      set({ flightsList: data });
    } catch (error) {
      set({ errorMessageProviders: error.message });
    }
  },
  clearList: async () => set({ flightsList: [] }),
  setFlightCode: async (code) => set({ flightCode: code }),
}));
